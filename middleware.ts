import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest, res: NextResponse) {

    const cookieName = '.AspNetCore.Cookies'

    const dotNetCookie =  req.cookies.get(cookieName)
  
    const isLoginPage = req.nextUrl.pathname.startsWith('/login');
    const _nextRoute = req.nextUrl.pathname.startsWith('/_next')
    const domain = req.nextUrl.host;

    // if(dotNetCookie && isLoginPage && !_nextRoute) {
    //     console.log("inside login page")
    //     return NextResponse.redirect(new URL('dashboard', `http://${domain}`));
    // }

    if(!dotNetCookie && !_nextRoute && !isLoginPage) {
        return NextResponse.redirect(new URL('login', `http://${domain}`));
    }

    const response = NextResponse.next({
        headers: new Headers(req.headers),
    })

    return response

}
