import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
    const { pathname } = request.nextUrl;

    // 1. Bypass untuk file statis & internal Next.js
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // 2. Logika Redirect
    if (isMaintenance) {
        // Biarkan akses ke halaman /maintenance itu sendiri agar tidak loop
        if (pathname === '/maintenance') {
            return NextResponse.next();
        }
        // Lempar semua halaman lain ke /maintenance
        return NextResponse.redirect(new URL('/maintenance', request.url));
    }

    // 3. Jika maintenance OFF tapi user mencoba buka /maintenance manual, balikkan ke Home
    if (!isMaintenance && pathname === '/maintenance') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}