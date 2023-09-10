import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./pages/routes";
import TopProgressBar from "./components/TopProgressBar";
import GetStarted from "./components/GetStarted";
import SliderNotification from "./components/SliderNotification";

function App() {
  return (
    <>
      <TopProgressBar />
      <ToastContainer position="bottom-center" />
      <RouterProvider router={router} />
      <GetStarted />
      <SliderNotification />
    </>
  );
}

export default App;
