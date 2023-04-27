import {useState} from "react";
import BlueButton from '@components/components/common/blueButton.js'
import users from "@components/users";

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

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.email === email && user.password === password) {
                setLoggedIn(true);
                sessionStorage.setItem("loggedIn", "true");
                sessionStorage.setItem("userId", user.id);
                window.location.href = '/take';
            }
        }

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