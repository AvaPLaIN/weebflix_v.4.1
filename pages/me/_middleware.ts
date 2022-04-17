// export { default } from "next-auth/middleware";

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

async function middleware(req: any) {
  const session = await getToken({
    req,
    secret,
  });

  if (!session)
    return NextResponse.redirect("http://localhost:3000/api/auth/signin");
}

export default middleware;
