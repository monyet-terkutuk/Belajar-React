/* eslint-disable react/prop-types */
function Button(props) {
    const {children = "Give me a text" , className = "bg-black text-slate-200", onClick = () => {},type = "button"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md  ${className} text-slate-200`} type={type} onClick={onClick}>
        {children}
      </button>
    )
}
  

export default Button