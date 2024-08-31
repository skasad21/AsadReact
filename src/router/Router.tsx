import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import UserListPage from "../pages/dashboard/UserListPage";
import PATHS from "./paths";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomePage />} />
      <Route path={PATHS.aboutUs} element={<AboutUsPage />} />
      <Route path={PATHS.contactUs} element={<ContactUsPage />} />
      <Route path={PATHS.dashboard.index} element={<DashboardIndex />} />
      <Route path={PATHS.dashboard.userList} element={<UserListPage />} />
    </Routes>
  );
};

export default Router;
