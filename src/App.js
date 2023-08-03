import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NFTINTROPAGE from "./pages/NFTINTROPAGE";
import Profile from "./pages/Profile";
import NftEplore from "./pages/NftEplore";
import NftInfo from "./pages/NftInfo";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Successful from "./pages/Successful";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/nft-eplore":
        title = "";
        metaDescription = "";
        break;
      case "/nft-info":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/check-out":
        title = "";
        metaDescription = "";
        break;
      case "/successful":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NFTINTROPAGE />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nft-eplore" element={<NftEplore />} />
      <Route path="/nft-info" element={<NftInfo />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/successful" element={<Successful />} />
    </Routes>
  );
}
export default App;
