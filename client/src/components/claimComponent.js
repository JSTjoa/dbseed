import React from "react";
import { useState, useEffect } from "react";
import claimComponentService from '../services/claimComponentService';


const ClaimComponent = () => {
  const [employeeClaimData, setEmployeeData] = useState();
  useEffect(() => {
      let test2 = claimComponentService.getClaimData() //code to get data from backend
      setEmployeeData(test2);
  }, []); //when page loads, retrieve data from backend

  const onHandleEdit = () => {
    alert('edit');
  }
    

  return (
    <div>
      <h2>User Claims</h2>
      <table>
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Expense Date</th>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Last Edited Claim Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeClaimData && employeeClaimData.map((data, index) => {
            return (
            <tr key={data.ClaimID}>
              <th>{data.ClaimID}</th>
              <th>{data.ExpenseDate}</th>
              <th>{data.Amount}</th>
              <th>{data.Purpose}</th>
              <th>{data.Status}</th>
              <th>{data.LastEditedClaimDate}</th>
              <th>
                {("Pending"===data.Status || "Rejected"===data.Status) ? <button onClick={onHandleEdit}>Edit</button>+' '+'Delete':'Nil'}
              </th>
            </tr> 
            )         
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ClaimComponent;