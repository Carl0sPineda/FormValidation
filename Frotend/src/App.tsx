import { Toaster } from "react-hot-toast";
import FormValidation from "./components/FormValidation";

const App = () => {
  return (
    <>
      <FormValidation />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
