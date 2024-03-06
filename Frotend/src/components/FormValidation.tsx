import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Register } from "../interface/user.interface";
import { useRegisterUser } from "../hooks/mutations/user.mutations";

const UserSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, "The name must be at least 6 characters")
    .max(20, "Name must be less than 20 characters")
    .matches(/^[^<>&]*$/, "Scripts or special characters are not allowed")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be less than 20 characters")
    .matches(/^[^<>&]*$/, "Scripts or special characters are not allowed")
    .required("Password is required"),
  age: yup
    .number()
    .min(18, "Age must be at least 18")
    .max(120, "Age cannot be greater than 120")
    .typeError("Age is required")
    .required(),
});

const FormValidation = () => {
  const registerMutation = useRegisterUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Register>({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit = async (data: Register) => {
    try {
      await registerMutation.mutateAsync(data);
      reset();
    } catch (error) {}
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-28"
      >
        <h1 className="text-slate-800 font-bold text-4xl text-center">
          User register
        </h1>
        {/* Input para el nombre */}
        <div className="mb-2 mt-10">
          <input
            {...register("name")}
            placeholder="Name"
            autoComplete="off"
            className={`w-full p-2 border rounded-md focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            } ${
              errors.name ? "focus:border-red-500" : "focus:border-blue-500"
            }`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        {/* Input para el email */}
        <div className="mb-2">
          <input
            {...register("email")}
            autoComplete="off"
            placeholder="Email"
            className={`w-full p-2 border rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } ${
              errors.email ? "focus:border-red-500" : "focus:border-blue-500"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-wrap -mx-2">
          {/* Input para el password */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <input
              {...register("password")}
              autoComplete="off"
              placeholder="Password"
              type="password"
              className={`w-full p-2 border rounded-md focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              } ${
                errors.password
                  ? "focus:border-red-500"
                  : "focus:border-blue-500"
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Input para la edad */}
          <div className="w-full md:w-1/2 px-2 mb-10">
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              autoComplete="off"
              placeholder="Age"
              className={`w-full p-2 border rounded-md focus:outline-none ${
                errors.age ? "border-red-500" : "border-gray-300"
              } ${
                errors.age ? "focus:border-red-500" : "focus:border-blue-500"
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>
        </div>

        {/* Botón de envío del formulario */}
        <button className="w-full py-2 px-4 bg-slate-800 text-white font-semibold rounded-md hover:bg-slate-900 cursor-pointer">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormValidation;
