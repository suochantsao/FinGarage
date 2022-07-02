// Components
import Header from "./Header";
import Footer from "./Footer";

function MainLayout(props) {
  return (
    <div>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
