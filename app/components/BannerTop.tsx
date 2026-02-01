import Button from "./Button";

export default function BannerTop() {
  return (
    <div className="container max-md:px-4 mx-auto flex md:hidden justify-center items-center relative z-20 gap-4 text-center pb-8 ">
        <p className="text-tec-white text-sm font-lexend">Retrouver la programmation ici</p>
        <Button href="#programmation" variant="tertiary">
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
