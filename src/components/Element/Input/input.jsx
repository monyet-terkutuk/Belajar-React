/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type, placeholder, name} = props
    return (
        <input type={type} id={name} name={name} className="text-sm border rounded w-full py-2 px-3 text-slate-700 mt-2 placeholder:opacity-50" placeholder={placeholder} />
    )
}

export default Input