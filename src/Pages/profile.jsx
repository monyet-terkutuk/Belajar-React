import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Hello My name {username}</p>
        </div>
    )
}

export default ProfilePage