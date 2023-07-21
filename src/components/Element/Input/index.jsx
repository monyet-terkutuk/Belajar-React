/* eslint-disable react/prop-types */
import Input from "./input"
import Label from "./label"
const FormInput = (props) => {
    const {label, type, name, placeholder} = props
    return (
        <div className="mb-6">
            <Label htmlFor={name} isi={label} />
            <Input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    )
}

export default FormInput