import Button from "./Button";

export default function HeaderContentBilleterie() {
  return (
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 gap-8 pb-12">
      <h1 className="heading-1 uppercase text-tec-white text-stroke-black-1 font-gothic">
        Billeterie
      </h1>
        <Button href="#tarifs" variant="secondary">
          <span>tarifs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="0 0 1920 1920"
          >
            <path
              d="M849.973.011v1497.931L486.9 1134.871 331 1290.772 960.228 1920l629.228-629.228-155.901-155.901-363.071 363.071V.011z"
              fillRule="evenodd"
            />
          </svg>
        </Button>
    </div>
  );
}
