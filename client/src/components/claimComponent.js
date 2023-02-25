import React from "react";

const ClaimComponent = () => {

  return (
    <div>
      <h2>inside claim component</h2>
      <table>
        <tr>
            <th>Claim ID</th>
            <th>Expense Date</th>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Last Edited Claim Date</th>
            <th>Actions</th>
        </tr>
      </table>
    </div>
  );
};

export default ClaimComponent;