import { useQuery } from "@tanstack/react-query";
import { User } from "../../interface/user.interface";
import { UserService } from "../../api/service/user.service";

const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: UserService.getUsers,
  });
};

export { useGetUsers };
