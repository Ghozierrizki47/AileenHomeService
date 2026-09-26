import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = /android|iphone|ipad|ipod|mobile/i.test(userAgent);

  const { pathname } = request.nextUrl;

  // Jangan redirect halaman mobile kembali ke dirinya sendiri
  if (isMobile && pathname === "/") {
    return NextResponse.redirect(new URL("/mobile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};