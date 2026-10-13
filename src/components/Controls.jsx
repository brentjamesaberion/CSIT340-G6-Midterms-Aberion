function Controls(props) {
    return(
        <button
            className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
            onClick={props.handleClick}
          >
            {props.text}
          </button>
    )
}

export default Controls;