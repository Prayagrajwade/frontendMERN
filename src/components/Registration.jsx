import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avtar, setAvtar] = useState([]);
    const [coverImage, setCoverimage] = useState([]);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/register",
                { fullname, username, avtar, coverImage, email, password }
            );
            setMessage(response.data.message);
        } catch (error) {
            console.error("Error registering in:", error);
            setMessage("An error occurred");
        }
    };

    function handleClick() {
        navigate("/login");
    }

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <header style={{ padding: "20px 0px", color: "#224F63" }}>
                <h1>Registration</h1>
            </header>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                }}
            >
                <input
                    type="email"
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
                <input
                    type="text"
                    placeholder="Enter Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    style={{
                        padding: "20px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        padding: "20px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <input
                    type="file"
                    placeholder="Upload Avtar"
                    value={avtar}
                    onChange={(e) => setAvtar(e.target.value)}
                    style={{
                        padding: "20px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <input
                    type="file"
                    placeholder="Upload Coverimage"
                    value={coverImage}
                    onChange={(e) => setCoverimage(e.target.value)}
                    style={{
                        padding: "20px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        padding: "20px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "16px",
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        padding: "20px 20px",
                        backgroundColor: "#0C73A1",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Submit
                </button>
                <p>
                    Already Registerd? <button onClick={handleClick}>Login</button>
                </p>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Registration;
