import { useState } from "react";
import Summary from "./Summary";
import PlanCard from "./PlanCard";

function PlanPicker() {
    const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

    return(
    <>
        <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">

        <Summary seats={seats} months={months} />

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
            onClick={handleAddSeat}
          >
            Add seat
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
            onClick={handleAddMonth}
          >
            Add month
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-10">

        <PlanCard seats={seats} months={months} name="Starter" price={199} storage="10 GB" support="Email support" />

        <PlanCard seats={seats} months={months} name="Team" price={499} storage="100 GB" support="Chat support" />

        <PlanCard seats={seats} months={months} name="Business" price={999} storage="1000 GB" support="Phone support" />
      </main>
    </>
    ) 

    
}
export default PlanPicker;
