import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogUser } from "../APICalls/AuthorizationCalls";

export function useLoggedSessions(userData) {
  const queryClient = useQueryClient();
  const { data, mutate, isPending } = useMutation({
    mutationFn: () => LogUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LoggedUser"] });
    },
  });
  return { data, mutate, isPending };
}
