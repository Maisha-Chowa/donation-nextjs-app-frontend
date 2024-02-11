import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  const role = token?.role;
  if (role === "admin" && pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  return NextResponse.redirect(`${process.env.BASE_URL}`);
}
export const config = {
  matcher: "/admin/:page*",
};
