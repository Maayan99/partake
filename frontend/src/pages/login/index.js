import {useState} from "react";
import BlueButton from '@components/components/common/blue-button.js'

export default function Login({setLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        sessionStorage.setItem("loggedIn", "true");
        window.location.href = '/take';

        setPassword('');
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-96">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <input
                            type="email"
                            value={email}
                            required
                            placeholder="Email"
                            onChange={handleEmail}
                            className="block w-full p-2 mb-4 border border-gray rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="password"
                            value={password}
                            required
                            placeholder="Password"
                            onChange={handlePassword}
                            className="block w-full p-2 mb-4 border border-gray rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <BlueButton type="submit">
                            Login
                        </BlueButton>
                    </div>
                </form>
            </div>
        </div>
    )
}