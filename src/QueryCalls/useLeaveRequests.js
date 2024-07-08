import { useQuery } from "@tanstack/react-query";
import {
  FetchAllLeaveRequests,
  FetchAllNewLeaveRequests,
  FetchAllRejectedLeaveRequests,
  FetchLeaveRequestBasedOnID,
} from "../APICalls/LeaveRequestTableAPI";

export function useLeaveRequests(filterStatus) {
  const {
    isLoading: isLoadingLeaveRequests,
    data: leaveRequests,
    error,
  } = useQuery({
    queryKey: ["AllLeaveRequests"],
    queryFn: () => FetchAllLeaveRequests(),
    enabled: filterStatus === "AllLeaveRequests" ? true : false,
  });

  return { leaveRequests, isLoadingLeaveRequests, error };
}

export function useNewLeaveRequests(filterStatus) {
  const {
    isLoading: isLoadingNewLeaveRequests,
    data: newLeaveRequests,
    error,
  } = useQuery({
    queryKey: ["NewLeaveRequests"],
    queryFn: () => FetchAllNewLeaveRequests(),
    enabled: filterStatus === "NewLeaveRequests" ? true : false,
  });

  return { newLeaveRequests, isLoadingNewLeaveRequests, error };
}

export function useRejectedLeaveRequests(filterStatus) {
  const {
    isLoading: isLoadingRejectedLeaveRequests,
    data: rejectedLeaveRequests,
    error,
  } = useQuery({
    queryKey: ["RejectedLeaveRequests"],
    queryFn: () => FetchAllRejectedLeaveRequests(),
    enabled: filterStatus === "RejectedLeaveRequests" ? true : false,
  });

  return { rejectedLeaveRequests, isLoadingRejectedLeaveRequests, error };
}

export function useSearchLeaveRequests(filterStatus, id) {
  const {
    isLoading: isSearchLoading,
    data: searchedLeaveRequest,
    error,
  } = useQuery({
    queryKey: ["SearchedLeaveRequests", id],
    queryFn: () => FetchLeaveRequestBasedOnID(id),
    enabled: filterStatus === "SearchedLeaveRequests" ? true : false,
  });

  return { isSearchLoading, searchedLeaveRequest, error };
}
