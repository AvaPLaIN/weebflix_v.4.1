export { default } from "next-auth/middleware";

// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// const secret = process.env.NEXTAUTH_SECRET;

// async function middleware(req: any) {
//   const redirectAuthUrl = process.env.REDIRECT_AUTH_URL || "/api/auth/signin";

//   const session = await getToken({
//     req,
//     secret,
//   });

//   if (!session) return NextResponse.redirect(redirectAuthUrl);
// }

// export default middleware;
