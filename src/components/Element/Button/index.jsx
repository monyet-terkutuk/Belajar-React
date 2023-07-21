/* eslint-disable react/prop-types */
function Button(props) {
    const {children ,className = "bg-black"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md border ${className} border-slate-200 text-slate-200`} type="button">
        {children}
      </button>
    )
}
  

export default Button