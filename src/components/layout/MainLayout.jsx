// Components
import Header from "./Header";

function MainLayout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default MainLayout;
