import { useState } from "react";
import Summary from "./Summary";
import PlanCard from "./PlanCard";
import Controls from "./Controls";

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
          <Controls handleClick={handleAddSeat} text="Add seat" />
          <Controls handleClick={handleAddMonth} text="Add month" />
          <Controls handleClick={handleReset} text="Reset" />
        </div>
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-10">

        <PlanCard seats={seats} months={months} name="Starter" price={199} storage="10 GB storage" support="Email support" />

        <PlanCard seats={seats} months={months} name="Team" price={499} storage="100 GB storage" support="Chat support" />

        <PlanCard seats={seats} months={months} name="Business" price={999} storage="1000 GB storage" support="Phone support" />
      </main>
    </>
    ) 

    
}
export default PlanPicker;
