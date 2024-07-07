import { BaseAPICallMethod } from "./DefaultAPIFunction";

export async function FetchAllApprovalRequests() {
  var response = await BaseAPICallMethod("ApprovalRequests", "GET");
  return response;
}

export async function FetchFilteredApprovalRequests(filter) {
  var response = await BaseAPICallMethod(
    "ApprovalRequests/FilteredApprovalRequests/" + filter,
    "GET"
  );
  return response;
}

export async function FetchFilteredByIdApprovalRequests(id) {
  var response = await BaseAPICallMethod("ApprovalRequests/" + id, "GET");
  return response;
}
