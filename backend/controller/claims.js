export const updateEntireClaim = (req,res)=>{
    // get the claim id from the req
    const { requestedId } = req.params;
    // query claim from database
    const target = pass;
    const args = req.body;

    if (target["FirstName"]){
        pass;
    }
    if (target["LastName"]){
        pass;
    }
    if (target["ExpenseDate"]){
        pass;
    }
    if (target["Amount"]){
        pass;
    }
    if (target["Purpose"]){
        pass;
    }
    if (target["FollowUp"]){
        pass;
    }
    if (target["PreviousClaimID"]){
        pass;
    }
    if (target["Status"]){
        pass;
    }
    if (target["LastEditedClaimDate"]){
        pass;
    }

    


    res.send('Claim successfully updated');
}
