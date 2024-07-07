import { BaseAPICallMethod } from "./DefaultAPIFunction";

export async function LogUser(data) {
  const response = await BaseAPICallMethod(
    "Authentication/Login",
    "POST",
    data
  );
  return response;
}
