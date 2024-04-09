import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
import App from "./App";

const Root = () => {
  return (
    <Suspense>
      <Routes>
        {/* <AuthProvider> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<App />} />
        {/* </AuthProvider> */}
      </Routes>
    </Suspense>
  );
};

export default Root;
