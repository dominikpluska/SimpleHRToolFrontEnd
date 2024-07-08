import { Outlet } from "react-router-dom";
import MainContainer from "./GlobalComponents/MainContainer/MainContainer";
import SideBar from "./GlobalComponents/SideBar/SideBar";
import TopBar from "./GlobalComponents/TopBar/TopBar";

export default function MainRoute() {
  return (
    <>
      <MainContainer>
        <TopBar />
        <SideBar />;
        <Outlet />
      </MainContainer>
    </>
  );
}
