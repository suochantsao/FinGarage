import LoginLayout from '../../components/layout/LoginLayout';
import { Outlet } from "react-router-dom";

function AccountIndex() {
  return (
    <LoginLayout>
      <Outlet />
    </LoginLayout>
  );
}

export default AccountIndex;
