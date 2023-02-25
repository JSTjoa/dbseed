import http from '../utils/axios';

function getClaimData(employeeID) {
    //add code to call endpoint here
    /*
    let employeeClaimList = http.get(`/api/claims/${employeeID}`); 
        // sample: http.get(`/tutorials/${id}`);
    */
    let employeeClaimList = [ //this is dummy data
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
            "ClaimID": 2015,
            "InsuranceID": 1009,
            "FirstName": "Martin",
            "LastName": "Ong",
            "ExpenseDate": "2022-09-02T08:00:00+08:00",
            "Amount": 100.00,
            "Purpose": "Outpatient Claim",
            "FollowUp": 0,
            "PreviousClaimID": null,
            "Status": "Rejected",
            "LastEditedClaimDate": "2022-09-03T10:30:00+08:00"
           }
    ];
    return employeeClaimList
}

function deleteClaim(ID) {
    let isSuccess = false ;
    //send ClaimID to back end for deletion
    isSuccess = true;
    return isSuccess;
}

const claimComponentServiceFunctions = {
    getClaimData,
    deleteClaim
} 

export default claimComponentServiceFunctions