import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));


  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  //use next request route handler
  const theme = request.cookies.get("theme");
  console.log(theme);

  //use nextjs cookies route handler
  const setCookies = await cookies();
  setCookies.set("results", "20");

  return new Response("<h1>API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
