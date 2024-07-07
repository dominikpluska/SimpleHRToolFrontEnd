import { BaseAPICallMethod } from "./DefaultAPIFunction";

export async function FetchAllProjects() {
  var response = await BaseAPICallMethod("Projects", "GET");
  return response;
}

export async function FetchFilteredProjects(filter) {
  var response = await BaseAPICallMethod(
    "Projects/FilterProjects/" + filter,
    "GET"
  );
  return response;
}

export async function FetchSpecificProject(id) {
  var response = await BaseAPICallMethod("Projects/" + id, "GET");
  console.log(response);
  return response;
}
