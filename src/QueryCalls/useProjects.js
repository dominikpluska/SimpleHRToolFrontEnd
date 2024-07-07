import { useQuery } from "@tanstack/react-query";
import {
  FetchAllProjects,
  FetchFilteredProjects,
  FetchSpecificProject,
} from "../APICalls/ProjectsTableAPI";

//Return All Projects
export function useAllProjects(filterStatus) {
  const {
    isLoading: isLoadingProjects,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["AllProjects"],
    queryFn: () => FetchAllProjects(),
    enabled: filterStatus === "AllProjects" ? true : false,
  });

  return { projects, isLoadingProjects, error };
}

//Return Active Projects
export function useActiveProjects(filterStatus) {
  const {
    isLoading: isLoadingActiveProjects,
    data: activeProjects,
    error,
  } = useQuery({
    queryKey: ["ActiveProjects"],
    queryFn: () => FetchFilteredProjects("Active"),
    enabled: filterStatus === "ActiveProjects" ? true : false,
  });
  return { activeProjects, isLoadingActiveProjects, error };
}

//Return Inactive Projects
export function useInactiveProjects(filterStatus) {
  const {
    isLoading: isLoadingInactiveProjects,
    data: inactiveProjects,
    error,
  } = useQuery({
    queryKey: ["InactiveProjects"],
    queryFn: () => FetchFilteredProjects("Inactive"),
    enabled: filterStatus === "InactiveProjects" ? true : false,
  });
  return { inactiveProjects, isLoadingInactiveProjects, error };
}

//Filter Specific Project
export function useSearchedProject(filterStatus, id) {
  const {
    isLoading,
    data: searchedProject,
    error,
  } = useQuery({
    queryKey: ["SearchedProject"],
    queryFn: () => FetchSpecificProject(id),
    enabled: filterStatus === "SearchedProject" ? true : false,
  });
  return { isLoading, searchedProject, error };
}
