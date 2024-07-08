import { BaseAPICallMethod } from "./DefaultAPIFunction";

export async function FetchAllEmployees() {
  const response = await BaseAPICallMethod("Employees", "GET");
  return response;
}

export async function FetchAllActiveEmployees() {
  const response = await BaseAPICallMethod(
    "Employees/GetActiveEmployees",
    "GET"
  );
  return response;
}

export async function FetchAllInactiveEmployees() {
  const response = await BaseAPICallMethod(
    "Employees/GetInactiveEmployees",
    "GET"
  );
  return response;
}

export async function SearchForEmployeesByName(name) {
  const response = await BaseAPICallMethod(
    "Employees/GetEmployeeByName/" + name,
    "GET"
  );
  return response;
}

export async function FetchHRDepartment() {
  const response = await BaseAPICallMethod(
    "Employees/GetListOfPeoplePartners",
    "GET"
  );
  return response;
}
