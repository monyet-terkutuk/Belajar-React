import Button from "../Element/Button"
import FormInput from "../Element/Input"
const FormRegister = () => {
    return (
    <form action="">
      <FormInput  type="text" placeholder="insert your name here..." name="name" label="Full Name" />
      <FormInput  type="email" placeholder="your@email.com" name="email" label="Email" />
      <FormInput  type="password" placeholder="********" name="password" label="Password" />
      <FormInput  type="password" placeholder="********" name="confirm-password" label="Confirm Password" />
      <Button className="bg-red-600 w-full">Register</Button>
    </form>
    )
}

export default FormRegister