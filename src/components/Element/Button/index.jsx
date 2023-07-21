/* eslint-disable react/prop-types */
function Button(props) {
    const {children ,classname = "bg-black"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md border ${classname} border-slate-200 text-slate-200`} type="button">
        {children}
      </button>
    )
}
  

export default Button