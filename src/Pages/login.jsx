/* eslint-disable react/no-unescaped-entities */
import AuthLayouts from "../components/Layout/AuthLayouts"
import FormLogin from "../components/Partials/FormLogin"
const LoginPage =() =>{
    return(
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage