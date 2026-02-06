import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
    const { pathname } = request.nextUrl;

    // 1. IZINKAN akses ke file statis dan gambar agar tidak kena redirect
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') || // Ini mengizinkan file seperti .png, .jpg, .svg
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // 2. LOGIKA MAINTENANCE
    if (isMaintenance) {
        // Jika kamu menaruh tampilan maintenance di halaman utama (/)
        // maka kita hanya redirect jika user mencoba buka halaman lain (seperti /about)
        if (pathname !== '/') {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    // Matcher ini mengecualikan internal Next.js dan file statis
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}