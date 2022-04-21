// Components
import Navbar from "./Navbar";

function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default MainLayout;
