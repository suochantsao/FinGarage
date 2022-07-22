// Components
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Header />
        <main>{props.children}</main>
      <Footer />
    </div>
  );
}