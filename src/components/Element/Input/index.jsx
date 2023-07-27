/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react"
import Input from "./input"
import Label from "./label"
const FormInput = forwardRef((props, ref) => {
    const {label, type, name, placeholder} = props
    return (
        <div className="mb-6">
            <Label htmlFor={name} isi={label} />
            <Input type={type} name={name} id={name} placeholder={placeholder} ref={ref} />
        </div>
    )
})

export default FormInput