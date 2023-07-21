/* eslint-disable react/prop-types */
const Label = (props) => {
    const {htmlFor,isi} = props
    return (
        <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">{isi}</label>
    )
}

export default Label