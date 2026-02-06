import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

    // Jika mode maintenance aktif dan user TIDAK sedang membuka halaman maintenance itu sendiri
    if (isMaintenance && !request.nextUrl.pathname.startsWith('/maintenance')) {
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }
}

// Tentukan halaman mana saja yang terkena aturan ini
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}