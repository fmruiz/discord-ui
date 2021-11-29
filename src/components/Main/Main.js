import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SidebarChannel } from "./SidebarChannel/SidebarChannel";
import { DashboardContainer, MainContainer } from "./styles";
import { routes } from "../../routes";

export const Main = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MainContainer>
        <SidebarChannel />
        <DashboardContainer>
          <Routes>
            {routes.map(({ path, Component }, i) => (
              <Route key={i} path={path} element={<Component />} />
            ))}
            <Route
              path="/*"
              element={<Navigate replace to={routes[0].path} />}
            />
          </Routes>
        </DashboardContainer>
      </MainContainer>
    </Suspense>
  );
};
