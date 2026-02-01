
import Footer from "../components/Footer";
import HeaderBilleterie from "../components/HeaderBilleterie";
import Prices from "../components/Prices";

export default function Home() {
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeaderBilleterie />
      <Prices />
      <Footer />
    </div>
  );
}