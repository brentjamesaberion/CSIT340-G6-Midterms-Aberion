function Summary(props) {
    return(
        <header>
          <h2 className="text-6xl font-bold">Build your plan</h2>
          <p className="mt-4 text-3xl text-[#CB2957]">
            Seats: {props.seats} | Months: {props.months}
          </p>
          <p className="mt-2 text-xl">Quote for Brent James N. ABerion</p>
        </header>
    )
}
export default Summary;