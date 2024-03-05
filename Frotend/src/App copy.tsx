// // import { useForm } from "react-hook-form";
// // import { z } from "zod";
// // import { zodResolver } from "@hookform/resolvers/zod";
// import { Toaster } from "react-hot-toast";
// import FormValidation from "./components/FormValidation";

// // Definir el esquema de validación utilizando Zod
// // const schema = z.object({
// //   name: z
// //     .string()
// //     .min(1, "Name required")
// //     .max(20, "Name must be less than 20 characters long"),
// //   email: z.string().email("Email no válido"),
// //   age: z
// //     .number()
// //     .positive("Age must be a positive number")
// //     .min(18, "Age must be at least 18")
// //     .max(100, "Age cannot be greater than 100"),
// // });

// // // Definir la interfaz para los datos del formulario
// // interface FormData {
// //   name: string;
// //   email: string;
// //   age: number;
// // }

// const App = () => {
//   // Configurar el formulario con useForm y el resolver de Zod
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm<FormData>({
//   //   resolver: zodResolver(schema),
//   // });

//   // // Función a ejecutar al enviar el formulario
//   // const onSubmit = (data: FormData) => {
//   //   console.log(data);
//   // };

//   return (
//     <>
//       {/* <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="max-w-md mx-auto mt-10"
//       >
//         <h1 className="text-blue-500 font-bold text-3xl text-center">
//           User register
//         </h1>
//         <div className="mb-2 mt-10">
//           <input
//             {...register("name")}
//             placeholder="Nombre"
//             className={`w-full p-2 border rounded-md focus:outline-none ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             } focus:border-blue-500`}
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm">{errors.name.message}</span>
//           )}
//         </div>
//         <div className="mb-2">
//           <input
//             {...register("email")}
//             placeholder="Email"
//             className={`w-full p-2 border rounded-md focus:outline-none ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             } focus:border-blue-500`}
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email.message}</span>
//           )}
//         </div>
//         <div className="mb-10">
//           <input
//             type="number"
//             {...register("age", { valueAsNumber: true })}
//             placeholder="Edad"
//             className={`w-full p-2 border rounded-md focus:outline-none ${
//               errors.age ? "border-red-500" : "border-gray-300"
//             } focus:border-blue-500`}
//           />
//           {errors.age && (
//             <p className="text-red-500 text-sm">{errors.age.message}</p>
//           )}
//         </div>
//         <input
//           type="submit"
//           value="Enviar"
//           className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 cursor-pointer"
//         />
//       </form> */}

//       <FormValidation />
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   );
// };

// export default App;
