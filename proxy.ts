import { NextRequest, NextResponse } from "next/server";

const IS_AB_TEST_ENABLED = false;

export function proxy(request: NextRequest) {
  if (!IS_AB_TEST_ENABLED) {
    return NextResponse.rewrite(new URL("/patternA", request.url));
  }

  const existing = request.cookies.get("ab_variant")?.value;
  const variant = existing ?? (Math.random() > 0.5 ? "patternA" : "patternB");

  const response = NextResponse.rewrite(new URL(`/${variant}`, request.url));

  if (!existing) {
    response.cookies.set("ab_variant", variant, {
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return response;
}

export const config = {
  matcher: "/",
};
