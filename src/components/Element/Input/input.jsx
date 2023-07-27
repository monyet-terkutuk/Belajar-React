/* eslint-disable react/display-name */
import { forwardRef } from "react"

/* eslint-disable react/prop-types */
const Input = forwardRef((props, ref) => {
    const {type, placeholder, name} = props
    return (
        <input type={type} ref={ref} id={name} name={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 mt-2 placeholder:opacity-50" placeholder={placeholder} />
    )
});

export default Input