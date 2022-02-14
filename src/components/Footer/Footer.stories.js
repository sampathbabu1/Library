import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
export default {
  title: "Footer",
  component: Footer,
};
export const Primary = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);
