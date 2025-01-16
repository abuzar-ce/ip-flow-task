// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("access_token")?.value;

//   if (!token) {
//     // Fetch the JWT token if not already set
//     return fetch("https://domain.attackinsights.ai/jwt", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         api_key: process.env.NEXT_PUBLIC_JWT_TOKEN,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const newToken = data?.token?.access_token;
//         if (newToken) {
//           const response = NextResponse.next();
//           response.cookies.set("JWT", newToken, {
//             path: "/",
//             httpOnly: true,
//             secure: true,
//             sameSite: "strict",
//             maxAge: 14400, // Set the expiration time to 4 hours (in seconds)
//           });
//           return response;
//         }
//         return NextResponse.next();
//       });
//   }

//   return NextResponse.next();
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("JWT")?.value;

  // If token is not present or expired
  if (!token) {
    // Fetch the JWT token if not already set or expired
    return fetch("https://domain.attackinsights.ai/jwt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.NEXT_PUBLIC_JWT_TOKEN,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newToken = data?.token?.access_token;
        if (newToken) {
          const response = NextResponse.next();
          response.cookies.set("JWT", newToken, {
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 14400, // Set the expiration time to 4 hours (in seconds)
          });
          return response;
        }
        // If no new token is received, proceed with the next response
        return NextResponse.next();
      })
      .catch((error) => {
        console.error("Error fetching token:", error);
        // Proceed even if the token fetch fails
        return NextResponse.next();
      });
  }

  return NextResponse.next();
}
