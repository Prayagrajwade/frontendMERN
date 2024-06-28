import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleForgetpass = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/login",
                { email }
            );
            setIsAuthenticated(true);
            setMessage(response.data.message);
            navigate("/login");
            console.log(response.data.message);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <header style={{ color: "#224F63" }}>
                <h1>Enter email</h1>
            </header>
            <form onSubmit={handleForgetpass}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: "20px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                    />
                    <button type="submit">Forget Password</button>
                    {message && <p>{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;