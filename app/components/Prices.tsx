import Button from "./Button";

export default function Prices() {
  let price: number = 0;
  let ticketAmount: number = 0;
  return (
    <section className="container" id="tarifs">
      <div className="py-10 md:py-15 flex flex-col items-center ">
        <h2 className="heading-2 text-center mb-10 text-tec-black">Billets</h2>
        <div className="w-full overflow-x-auto mb-8 md:mb-10" >
          <table className="table-fixed w-full">
            <thead className="text-center bg-tec-black text-tec-white">
              <tr className="font-gothic uppercase tracking-2">
                <th className="px-3 md:px-6 py-3 md:py-4 border border-tec-white">
                  Tarifs
                </th>
                <th className="px-3 md:px-6 py-3 md:py-4 border border-tec-white">
                  Places
                </th>
                <th className="px-3 md:px-6 py-3 md:py-4 border border-tec-white">
                  Montant
                </th>
              </tr>
              <tr className="font-lexend text-base md:text-lg">
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  Étudiant ou senior (+60ans)
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white align-middle ">
                  <div className="flex items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full">
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                    <p>0</p>
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  34,99€
                </td>
              </tr>
              <tr className="font-lexend text-base md:text-lg">
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  Adulte
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white align-middle">
                  <div className="flex items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full">
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                    <p>0</p>
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  39,99€
                </td>
              </tr>
              <tr className="font-lexend text-base md:text-lg">
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  En situation de handicap
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white align-middle">
                  <div className="flex items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full">
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                    <p>0</p>
                    <Button variant="tertiary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z"
                        />
                      </svg>{" "}
                    </Button>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  29,99€
                </td>
              </tr>
            </thead>
          </table>
        </div>
        
          <Button variant="secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={19}
              height={18}
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M0 .786C0 .35.35 0 .786 0h1.482c.887 0 1.647.635 1.804 1.506l.013.065h6.128v3.342L9.197 3.898a.785.785 0 0 0-1.11 1.11l2.357 2.357a.782.782 0 0 0 1.11 0l2.356-2.357a.785.785 0 0 0-1.11-1.11l-1.014 1.015V1.571h5.807c.654 0 1.149.596 1.027 1.24l-1.017 5.431a2.094 2.094 0 0 1-2.06 1.709H5.608l.167.926a.786.786 0 0 0 .772.645h8.38c.435 0 .785.35.785.785 0 .436-.35.786-.785.786H6.55a2.355 2.355 0 0 1-2.318-1.934L2.527 1.787a.263.263 0 0 0-.259-.216H.786A.784.784 0 0 1 0 .786ZM5.237 15.71a1.572 1.572 0 1 1 3.143.001 1.572 1.572 0 0 1-3.143 0Zm7.332 0a1.572 1.572 0 1 1 3.143.001 1.572 1.572 0 0 1-3.143 0Z"
              />
            </svg>
            <span>
              {ticketAmount} Billets - {price}
            </span>
          </Button>
      
      </div>
    </section>
  );
}
