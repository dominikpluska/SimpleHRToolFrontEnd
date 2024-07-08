import { useQuery } from "@tanstack/react-query";
import {
  FetchAllActiveEmployees,
  FetchAllInactiveEmployees,
  FetchAllEmployees,
  SearchForEmployeesByName,
  FetchHRDepartment,
} from "../../APICalls/EmployeesTableAPI";

//Return All Employees
export function useAllEmployees(filterStatus) {
  const {
    isLoading: isLoadingEmployees,
    data: Employees,
    error,
  } = useQuery({
    queryKey: ["AllEmployees"],
    queryFn: () => FetchAllEmployees(),
    enabled: filterStatus === "AllEmployees" ? true : false,
  });

  return { Employees, isLoadingEmployees, error };
}

//Return Active Employees
export function useActiveEmployees(filterStatus) {
  const {
    isLoading: isLoadingActiveEmployees,
    data: activeEmployees,
    error,
  } = useQuery({
    queryKey: ["ActiveEmployees"],
    queryFn: () => FetchAllActiveEmployees(),
    enabled: filterStatus === "ActiveEmployees" ? true : false,
  });

  return { activeEmployees, isLoadingActiveEmployees, error };
}

//Return Inactive Employees
export function useInactiveEmployees(filterStatus) {
  const {
    isLoading: isLoadingInActiveEmployees,
    data: InactiveEmployees,
    error,
  } = useQuery({
    queryKey: ["InactiveEmployees"],
    queryFn: () => FetchAllInactiveEmployees(),
    enabled: filterStatus === "InactiveEmployees" ? true : false,
  });

  return { InactiveEmployees, isLoadingInActiveEmployees, error };
}

export function useFilteredEmployees(filterStatus, name) {
  const {
    isLoading: isFilteredEmployees,
    data: filteredEmployees,
    error,
  } = useQuery({
    queryKey: ["FilteredEmployees"],
    queryFn: () => SearchForEmployeesByName(name),
    enabled: filterStatus === "FilteredEmployees" ? true : false,
  });

  return { filteredEmployees, isFilteredEmployees, error };
}

export function useHRDepartment() {
  const {
    isLoading,
    data: HR,
    error,
  } = useQuery({
    queryKey: ["HR"],
    queryFn: () => FetchHRDepartment(),
  });

  return { HR, isLoading, error };
}
