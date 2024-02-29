import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (token) {
    const { pathname } = request.nextUrl;
    const url = request.nextUrl.clone();
    const role = token?.role;
    if (role === "admin" && pathname.startsWith("/admin")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(url.origin);
    }
  }
}
export const config = {
  matcher: "/admin/:page*",
};

// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const { pathname } = request.nextUrl;
//   const role = token?.role;
//   console.log("this si", role);
//   if (role === "admin" && pathname.startsWith("/admin")) {
//     return NextResponse.next();
//   }
//   return NextResponse.redirect(
//     "https://donation-nextjs-app-frontend.vercel.app/"
//   );
// }
// export const config = {
//   matcher: "/admin/:page*",
// };
