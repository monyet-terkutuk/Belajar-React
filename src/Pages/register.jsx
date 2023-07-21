/* eslint-disable react/no-unescaped-entities */
import AuthLayouts from "../components/Layout/AuthLayouts"
import FormRegister from "../components/Partials/FormRegister"
const RegisterPage =() =>{
    return(
        <AuthLayouts title="Register" type="register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPage