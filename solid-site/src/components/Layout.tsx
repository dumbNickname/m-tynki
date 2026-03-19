import { JSX } from "solid-js";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  return (
    <div class="site">
      <Header />
      <main id="content">{props.children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
