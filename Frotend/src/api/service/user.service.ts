import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { Register, User } from "../../interface/user.interface";
import { axiosInstance } from "../config/axiosInstance";

export class UserService {
  static register = async (user: Register): Promise<Register> => {
    try {
      const { data } = await axiosInstance.post<Register>("/users", user);
      console.log(data);
      toast.success("User added successfully");
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Unable to register user");
    }
  };

  static getUsers = async (): Promise<User[]> => {
    try {
      const { data } = await axiosInstance.get<User[]>("/users");
      return data;
    } catch (error) {
      throw new Error("Failed to get data");
    }
  };
}
