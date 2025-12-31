import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

const intl = createMiddleware(routing);

// 👇 sin any, tipado correcto
export function proxy(request: NextRequest) {
  return intl(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
