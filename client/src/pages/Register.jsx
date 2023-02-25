import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Auth stuff
import axios from "../utils/axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const REGIST_ENDPT = "/api/user/login"; // TO UPDATE

const Login = (props) => {
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
            const sendingData = { EmployeeID: details.userId, Password: details.password };
            const response = await axios.post(REGIST_ENDPT, JSON.stringify(sendingData));
            props.registerUser(response); // If login successful update store
            // const roles = response?.data?.roles; // for role based
            navigate(from_page, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMessage("No Response from server. Please try again");
            } else {
                setErrMessage("Missing Username or Password");
            }
        } finally {
            setDetails({
                userId: "",
                password: ""
            });
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-inner">
                    <img className="logo" alt="DBS Logo" src="/images/dbs_logo.svg" />
                    <div className="form-group">
                        <div>
                            <label htmlFor="userId">Employee ID</label>
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
                    <input type="submit" value="Register" />
                    <p>
                        Already have an account? <br />
                        <Link to="/login">
                            <span> Sign in here</span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Login);
