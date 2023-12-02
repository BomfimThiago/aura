import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest, res: NextResponse) {

    if (req.nextUrl.pathname === '/') {
        return NextResponse.rewrite(new URL('/dashboard', req.nextUrl.href));
    }

    const cookieName = 'accessToken'

    const cookie = req.cookies.get(cookieName)

    const isLoginPage = req.nextUrl.pathname.startsWith('/login');

    const domain = req.nextUrl.host;

    if(cookie && isLoginPage) {
        return NextResponse.redirect(new URL('dashboard', `http://${domain}`));
    }

    if(!cookie && !isLoginPage) {
        return NextResponse.redirect(new URL('login', `http://${domain}`));
    }

    const response = NextResponse.next({
        headers: new Headers(req.headers),
    })

    return response

}


export const config = {
    matcher: '/((?!_next|favicon.ico).*)',
}