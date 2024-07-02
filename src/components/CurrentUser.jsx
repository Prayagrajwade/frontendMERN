import axios from "axios";

export const CurrentUser = async () => {
    const response = await axios.get("https://backendmern-r876.onrender.com/api/v1/users/current-user", {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};
