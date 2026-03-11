import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const RoutesApp = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myjob" element={<MyJob />} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default RoutesApp;