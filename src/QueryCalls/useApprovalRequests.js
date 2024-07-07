import { useQuery } from "@tanstack/react-query";
import {
  FetchAllApprovalRequests,
  FetchFilteredApprovalRequests,
  FetchFilteredByIdApprovalRequests,
} from "../APICalls/ApprovalRequestTableAPI";

//Return All Approval Requests
export function useAllApprovalRequests(filterStatus) {
  const {
    isLoading: isLoadingApprovalRequests,
    data: approvalRequests,
    error,
  } = useQuery({
    queryKey: ["AllApprovalRequests"],
    queryFn: () => FetchAllApprovalRequests(),
    enabled: filterStatus === "AllApprovalRequests" ? true : false,
  });

  return { approvalRequests, isLoadingApprovalRequests, error };
}

//Return All New Requests
export function useAllNewApprovalRequests(filterStatus) {
  const {
    isLoading: isNewLoadingApprovalRequests,
    data: newApprovalRequests,
    error,
  } = useQuery({
    queryKey: ["AllNewApprovalRequests"],
    queryFn: () => FetchFilteredApprovalRequests("New"),
    enabled: filterStatus === "AllNewApprovalRequests" ? true : false,
  });

  return { newApprovalRequests, isNewLoadingApprovalRequests, error };
}

//Return All Approved Requests
export function useAllApprovedApprovalRequests(filterStatus) {
  const {
    isLoading: isLoadingApprovedRequests,
    data: approvedApprovalRequests,
    error,
  } = useQuery({
    queryKey: ["AllApprovedApprovalRequests"],
    queryFn: () => FetchFilteredApprovalRequests("Approved"),
    enabled: filterStatus === "AllApprovedApprovalRequests" ? true : false,
  });

  return { approvedApprovalRequests, error };
}

//Return All Rejected Requests
export function useAllRejectedApprovalRequests(filterStatus) {
  const {
    isLoading: isLoadingApprovedRequests,
    data: rejectedApprovalRequests,
    error,
  } = useQuery({
    queryKey: ["AllRejectedApprovalRequests"],
    queryFn: () => FetchFilteredApprovalRequests("Rejected"),
    enabled: filterStatus === "AllRejectedApprovalRequests" ? true : false,
  });

  return { rejectedApprovalRequests, error };
}

//Return All Rejected Requests
export function useSearchedApprovalRequests(filterStatus, id) {
  const {
    isLoading: isLoadingApprovedRequests,
    data: searchedApprovalRequests,
    error,
  } = useQuery({
    queryKey: ["SearchedApprovalRequests"],
    queryFn: () => FetchFilteredByIdApprovalRequests(id),
    enabled: filterStatus === "SearchedApprovalRequests" ? true : false,
  });

  return { searchedApprovalRequests, error };
}
