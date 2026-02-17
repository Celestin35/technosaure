"use client";
import { useState } from "react";
import Button from "./Button";

export default function Prices() {
  const studentPrice = 34.99;
  const adultPrice = 39.99;
  const handicapPrice = 29.99;

  const [amountStudentTicket, setAmountStudentTicket] = useState(0);
  const [amountAdultTicket, setAmountAdultTicket] = useState(0);
  const [amountHandicapTicket, setAmountHandicapTicket] = useState(0);
  const ticketAmount =
    amountStudentTicket + amountAdultTicket + amountHandicapTicket;
  const totalPrice =
    amountStudentTicket * studentPrice +
    amountAdultTicket * adultPrice +
    amountHandicapTicket * handicapPrice;
  
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
            </thead>
            <tbody className="text-center bg-tec-black text-tec-white">
              <tr className="font-lexend text-base md:text-lg">
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  Étudiant ou senior (+60ans)
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white align-middle ">
                  <div className="grid grid-cols-2 items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full md:flex md:items-center md:justify-center">
                    <div
                      className="col-start-1 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountStudentTicket(prev => {
                          if (prev === 0) return prev;
                          return prev - 1;
                        });
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            y1="0.582857"
                            x2="18.8276"
                            y2="0.582857"
                            stroke="currentColor"
                            strokeWidth="1.16583"
                          />
                        </svg>
                      </Button>
                    </div>
                    <p className="col-span-2 row-start-1 text-center md:col-auto md:row-auto">
                      {amountStudentTicket}
                    </p>
                    <div
                      className="col-start-2 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountStudentTicket(prev => prev + 1);
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
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
                  <div className="grid grid-cols-2 items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full md:flex md:items-center md:justify-center">
                    <div
                      className="col-start-1 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountAdultTicket(prev => {
                          if (prev === 0) return prev;
                          return prev - 1;
                        });
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            y1="0.582857"
                            x2="18.8276"
                            y2="0.582857"
                            stroke="currentColor"
                            strokeWidth="1.16583"
                          />
                        </svg>
                      </Button>
                    </div>
                    <p className="col-span-2 row-start-1 text-center md:col-auto md:row-auto">
                      {amountAdultTicket}
                    </p>
                    <div
                      className="col-start-2 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountAdultTicket(prev => prev + 1);
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
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
                  <div className="grid grid-cols-2 items-center justify-center gap-3 md:gap-8 xl:gap-12 h-full w-full md:flex md:items-center md:justify-center">
                    <div
                      className="col-start-1 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountHandicapTicket(prev => {
                          if (prev === 0) return prev;
                          return prev - 1;
                        });
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 19 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            y1="0.582857"
                            x2="18.8276"
                            y2="0.582857"
                            stroke="currentColor"
                            strokeWidth="1.16583"
                          />
                        </svg>
                      </Button>
                    </div>
                    <p className="col-span-2 row-start-1 text-center md:col-auto md:row-auto">
                      {amountHandicapTicket}
                    </p>
                    <div
                      className="col-start-2 row-start-2 md:col-auto md:row-auto"
                      onClick={() => {
                        setAmountHandicapTicket(prev => prev + 1);
                      }}
                    >
                      <Button variant="tertiary" classList="bg-tec-pink">
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
                  </div>
                </td>
                <td className="px-3 md:px-6 py-4 md:py-6 border border-tec-white">
                  29,99€
                </td>
              </tr>
            </tbody>
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
              {ticketAmount} Billets - {totalPrice.toFixed(2)}€
            </span>
          </Button>
      
      </div>
    </section>
  );
}
