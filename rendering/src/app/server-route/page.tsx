import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoute() {
  const result = serverSideFunction();
  return <h1>Server route {result}</h1>;
}
 