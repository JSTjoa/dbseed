import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../App.css";

// Auth stuff
import axios from "../utils/axios";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
const LOGIN_ENDPT = "/api/login"; // TO UPDATE

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
            axios.defaults.timeout = 1000;
            const sendingData = { EmployeeID: details.userId, Password: details.password };
            console.log(sendingData);
            const response = await axios.post(LOGIN_ENDPT, JSON.stringify(sendingData));

            // const response = {
            //     EmployeeID: 3331,
            //     FirstName: "Irene",
            //     LastName: "Lim",
            //     TokenExpiry: "2023-02-26T07:59:30.000Z",
            //     Role: ["Customer"],
            //     authenticated: true,
            //     message: "Login success",
            //     accessToken:
            //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozMzMxLCJpYXQiOjE2NzczMTE5NzAsImV4cCI6MTY3NzM5ODM3MH0.Jq_CRMRkgNxW9smrw5MHevznvWY3oQwp9TO1QrVqzQQ"
            // };
            console.log("HELELOS");
            props.loginUser(response); // If login successful update store
            // const roles = response?.data?.roles; // for role based
            navigate("/home", { replace: true });
        } catch (err) {
            console.log("err", err);
            if (!err?.response?.data) {
                setErrMessage("No Response from server. Please try again");
            } else if (err.response?.data?.status === 400) {
                console.log("404");
                setErrMessage("Missing Username or Password");
            } else if (err.response?.data?.status === 401) {
                setErrMessage("Unauthorized");
            } else {
                setErrMessage("Username or Password is incorrect!");
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
                    <input type="submit" value="Login" />
                    <p>
                        New to DBS? <br />
                        <Link to="/register">
                            <span> Join us here</span>
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

export default connect(mapStateToProps, { loginUser })(Login);
