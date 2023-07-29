import { useEffect, useRef, useState } from "react";
import Button from "../Element/Button"
import FormInput from "../Element/Input"
import { login } from "../../service/auth.service";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const HandleLogin = (event) => {
    event.preventDefault();

    // localStorage.setItem("username", event.target.username.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  },[])

  return (
    <form onSubmit={HandleLogin}>
      <FormInput  type="text" placeholder="your username" name="username" label="Username" ref={usernameRef} />
      <FormInput  type="password" placeholder="********" name="password" label="Password" />
      <Button className="bg-red-600 w-full border border-slate-200" type="submit">Login</Button>
      { loginFailed && <p className="text-red-600 text-center mt-5">{loginFailed}</p>}
    </form>
    )
}

export default FormLogin