import type { NextRequest } from "next/server";
import {NextResponse} from "next/server"

let reqCount = 0;

export function middleware(req:NextRequest){
    if(req.nextUrl.pathname.startsWith('/')){
        return NextResponse.redirect(new URL('/api/user',req.url))
    }
    ++reqCount;
console.log(`number of req is ${reqCount}`);
return NextResponse.next()
}




// export const config = {
//     matcher:"/api/:path*"
// }