import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/shared";
import { HomePage } from "@/features";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
