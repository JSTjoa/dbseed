import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Auth stuff
import axios from "../utils/axios";
import { registerUser } from "../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const REGIST_ENDPT = "/api/createUser"; // TO UPDATE

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
            const sendingData = {
                EmployeeID: details.userId,
                Password: details.password,
                FirstName: details.firstName,
                LastName: details.lastName,
                Age: details.age,
                Role: ["Customer"]
            };
            console.log(sendingData);
            // const response = await axios.post(REGIST_ENDPT, JSON.stringify(sendingData));

            const response = {
                EmployeeID: 3331,
                FirstName: "Irene",
                LastName: "Lim",
                TokenExpiry: "2023-02-26T07:59:30.000Z",
                Role: ["Customer"],
                authenticated: true,
                message: "Login success",
                accessToken:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjozMzMxLCJpYXQiOjE2NzczMTE5NzAsImV4cCI6MTY3NzM5ODM3MH0.Jq_CRMRkgNxW9smrw5MHevznvWY3oQwp9TO1QrVqzQQ"
            };

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
                    <div className="form-group">
                        <div>
                            <label htmlFor="userId">First Name</label>
                        </div>
                        <input
                            type="firstName"
                            name="firstName"
                            id="firstName"
                            onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                            value={details.firstName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="userId">Last Name</label>
                        </div>
                        <input
                            type="lastName"
                            name="lastName"
                            id="lastName"
                            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
                            value={details.lastName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label htmlFor="userId">Age</label>
                        </div>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            onChange={(e) => setDetails({ ...details, age: e.target.value })}
                            value={details.age}
                            required
                        />
                    </div>
                    {errMessage != "" ? <div className="error">{errMessage}</div> : ""}
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

export default connect(mapStateToProps, { registerUser })(Login);
