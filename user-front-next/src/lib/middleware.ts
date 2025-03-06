import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// export { auth as middleware } from "@/lib/auth";

const protectedRoutes = ["/user", "/admin"];

export const middleware = async ({ req }: { req: NextRequest }) => {
  const session = await auth();
  const { pathname } = req.nextUrl;
  const isProtected = protectedRoutes.includes(pathname);
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
};
