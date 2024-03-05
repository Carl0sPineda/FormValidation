import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../../api/service/user.service";

const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UserService.register,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export { useRegisterUser };
