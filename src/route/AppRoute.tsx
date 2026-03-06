import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/Homepage";
import WebLanding from "../pages/webdesign/WebLanding";
import HeroSection from "../pages/mobileApp/HeroSection";
import MainPage from "../pages/home/components/MainPage";
import NotFound from "../pages/home/components/Pnf";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/web-landing" element={<WebLanding />} />
          <Route path="/mobile-app" element={<HeroSection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
