import React from "react";
import { useState, useEffect } from "react";


const ClaimComponent = () => {
    //call service to get all claims for this employee
    //this is a sample employee claims list
    let employeeClaimList = [
        {
            "ClaimID": 2010,
            "InsuranceID": 1009,
            "FirstName": "Martin",
            "LastName": "Ong",
            "ExpenseDate": "2022-07-14T08:00:00+08:00",
            "Amount": 100.00,
            "Purpose": "Dentist",
            "FollowUp": 0,
            "PreviousClaimID": null,
            "Status": "Approved",
            "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
           },
           {
            "ClaimID": 2011,
            "InsuranceID": 1008,
            "FirstName": "John",
            "LastName": "Tan",
            "ExpenseDate": "2022-08-15T08:00:00+08:00",
            "Amount": 100.00,
            "Purpose": "Outpatient Claim",
            "FollowUp": 0,
            "PreviousClaimID": null,
            "Status": "Approved",
            "LastEditedClaimDate": "2022-08-16T19:35:53+08:00"
           }
    ];
    const [employeeClaimData, setEmployeeData] = useState();
    useEffect(() => {
        //code to get data from backend
        setEmployeeData(employeeClaimList);
      }, []); //when page loads, retrieve data from backend

  return (
    <div>
      <h2>inside claim component</h2>
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
          {employeeClaimList.map((data, index) => {
            return (
            <tr key={data.ClaimID}>
              <th>{data.ClaimID}</th>
              <th>{data.ExpenseDate}</th>
              <th>{data.Amount}</th>
              <th>{data.Purpose}</th>
              <th>{data.Status}</th>
              <th>{data.LastEditedClaimDate}</th>
              <th>Actions</th>
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