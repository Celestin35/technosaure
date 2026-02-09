import Button from "./Button";

export default function HeaderContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 gap-4 h-full pb-12">
      <h1 className="heading-1 uppercase text-stroke-2 font-gothic">
        23 AVRIL 2026
      </h1>
      <h2 className="heading-2 uppercase text-stroke-1 font-gothic">
        RENNES
        <br />
        PARC EXPO
      </h2>
      <div className="block md:flex items-center md:justify-center md:gap-6">
        <Button href="#programmation" variant="primary" classList="hidden md:block">
          <span>Artistes</span>
        </Button>
        <Button href="/billeterie" variant="primary">
          <span>Billeterie</span>
        </Button>
      </div>

      <p className="pt-15 uppercase heading-4 text-tec-white font-gothic text-stroke-black-1">
        LE PLUS GRAND FESTIVAL DE TECHNO D’EUROPE
      </p>
    </div>
  );
}
