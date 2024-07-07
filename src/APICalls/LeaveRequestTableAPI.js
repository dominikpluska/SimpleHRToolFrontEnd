import { BaseAPICallMethod } from "./DefaultAPIFunction";

export async function FetchAllLeaveRequests() {
  const response = await BaseAPICallMethod("LeaveRequests", "GET");
  return response;
}

export async function FetchAllNewLeaveRequests() {
  const response = await BaseAPICallMethod(
    "LeaveRequests/NewLeaveRequests",
    "GET"
  );
  return response;
}

export async function FetchAllRejectedLeaveRequests() {
  const response = await BaseAPICallMethod(
    "LeaveRequests/RejectedLeaveRequests",
    "GET"
  );
  return response;
}

export async function FetchLeaveRequestBasedOnID(id) {
  const response = await BaseAPICallMethod("LeaveRequests/" + id, "GET");
  return response;
}
