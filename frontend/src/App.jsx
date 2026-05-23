import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <AppRoutes />

    </BrowserRouter>
  );
}

export default App;