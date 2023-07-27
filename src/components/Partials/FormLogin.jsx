import { useEffect, useRef } from "react";
import Button from "../Element/Button"
import FormInput from "../Element/Input"
const FormLogin = () => {
  const HandleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    
    window.location.href = "/products";
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  },[])

    return (
    <form onSubmit={HandleLogin}>
      <FormInput  type="email" placeholder="your@email.com" name="email" label="Email" ref={emailRef} />
      <FormInput  type="password" placeholder="********" name="password" label="Password" />
      <Button className="bg-red-600 w-full border border-slate-200" type="submit">Login</Button>
    </form>
    )
}

export default FormLogin