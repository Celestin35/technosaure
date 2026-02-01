
import Footer from "./components/Footer";
import Header from "./components/Header";
import Programmation from "./components/Programmation";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Programmation />
      <Footer />
    </div>
  );
}