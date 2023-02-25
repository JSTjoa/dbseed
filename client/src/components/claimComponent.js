import React from "react";
import { useState, useEffect } from "react";
import claimComponentService from '../services/claimComponentService';


const ClaimComponent = () => {
  const [employeeClaimData, setEmployeeData] = useState();
  const [refreshPage,setRefresh] = useState(false);
  useEffect(() => {
      let test2 = claimComponentService.getClaimData() //code to get data from backend
      setEmployeeData(test2);
  }, [refreshPage]); //when page loads, retrieve data from backend

  const onHandleEdit = (ID) => {
    // redirect to edit claims page
    alert('Edit '+ID);
  }
  
  const onHandleDel = (ID) => {
    let isSuccess = claimComponentService.deleteClaim(ID);
    alert(ID)
    if (isSuccess) {
      setRefresh(!refreshPage);
    }
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th className="active-row" colSpan='7' id='table-title-pre'>User Claims</th>
          </tr>
          <tr className="active-row">
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
                {("Pending"===data.Status || "Rejected"===data.Status) ? <div><button onClick={()=>{onHandleEdit(data.ClaimID)}}>Edit</button><button onClick={()=>{onHandleDel(data.ClaimID)}}>Delete</button></div>:'Nil'}
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