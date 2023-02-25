import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { logo } from "../../public/images/dbs_logo.svg";

import axios from "../utils/axios";
import { setAuthToken } from "../utils/authentication";

const LOGIN_ENDPT = "/auth"; // TO UPDATE

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from_page = location.state?.from?.pathname || "/";

    const userRef = useRef();

    const [details, setDetails] = useState({ userId: "", password: "" });
    const [errMessage, setErrMessage] = useState("");

    useEffect(() => {
        // Focus on user field
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage("");
    }, [details]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_ENDPT, JSON.stringify({ details }));

            const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles; // for role based
            setDetails({
                userId: "",
                password: ""
            });

            navigate(from_page, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMessage("No Response from server. Please try again");
            } else if (err.response?.status === 400) {
                setErrMessage("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMessage("Unauthorized");
            } else {
                setErrMessage("Username or Password is incorrect!");
            }
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-inner">
                    <img className="logo" src="images/dbs_logo.svg" />
                    <div className="form-group">
                        <div>
                            <label htmlFor="userId">User ID</label>
                        </div>
                        <input
                            type="userId"
                            name="userId"
                            id="userId"
                            onChange={(e) => setDetails({ ...details, userId: e.target.value })}
                            value={details.userId}
                            required
                            ref={userRef}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}
                            required
                        />
                    </div>
                    {errMessage !== "" ? <div className="error">{errMessage}</div> : ""}
                    <input type="submit" value="Login" />
                </div>
            </form>
            <p>
                {" "}
                New to DBS? <br />
                <span> Sign in here</span>
            </p>
        </div>
    );
};

export default Login;
