import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/default.css";

// * Import Here Any Page Component
import LoadingPage from "./pages/LoadingPage";
import ItemPage from "./pages/itemPage";
import OpenARPage from "./pages/openItemAr";
// const LandingPage = lazy(() => import("./pages/LandingPage"));
// const ItemPage = lazy(() => import("./pages/itemPage"));

// * Import Here Any Component
import Container from "./components/Container";

const App = () => {
  const setHeight = () => {
    // console.log("setting height");
    const currentHeight = window.innerHeight;
    // console.log("innerHeight:", currentHeight);
    document.body.style.height = `${currentHeight}px`;
  };
  window.addEventListener("resize", setHeight);
  setHeight();
  return (
    <Container>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<ItemPage />} />
          <Route path="/item/:itemIdFromUrl" element={<ItemPage />} />
          <Route path="/openAR" element={<OpenARPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
