
import Footer from "../components/Footer";
import HeaderBilleterie from "../components/HeaderBilleterie";
import Prices from "../components/Prices";
import InfosPratiques from "../components/InfosPratiques";

export default function Home() {
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeaderBilleterie />
      <Prices />
      <InfosPratiques />
      <Footer />
    </div>
  );
}