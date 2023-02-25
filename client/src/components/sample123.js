import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SampleComponent = () => {

    const location = useLocation();


    return (
        <div>
            testing
            <hr></hr>
            {location.state.empId2 && <h5> {location.state.empId2} </h5>}
        </div>
    );
}

export default SampleComponent;
