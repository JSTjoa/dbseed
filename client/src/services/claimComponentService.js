function getClaimData() {
    //add code to call endpoint here
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
            "Status": "Pending",
            "LastEditedClaimDate": "2022-08-16T19:35:53+08:00"
        }
    ];
    return employeeClaimList
}

const claimComponentServiceFunctions = {
    getClaimData
} 

export default claimComponentServiceFunctions