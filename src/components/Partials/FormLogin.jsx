import Button from "../Element/Button"
import FormInput from "../Element/Input"
const FormLogin = () => {
    return (
    <form action="">
      <FormInput  type="email" placeholder="your@email.com" name="email" label="Email" />
      <FormInput  type="password" placeholder="********" name="password" label="Password" />
      <Button classname="bg-red-600 w-full">Login</Button>
    </form>
    )
}

export default FormLogin