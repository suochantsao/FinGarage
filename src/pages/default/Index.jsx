// Components
import MainLayout from "../../components/layout/MainLayout";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default Index;
