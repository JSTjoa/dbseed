//import { useState } from 'react'
import './ClaimForm.css';

const ClaimForm = () => {
    //const [expenseDate, setDate] = useState('')
    //const [claimType, setType] = useState('')
    //const [purpose, setPurpose] = useState('')
    //const [amount, setAmount] = useState('')

    // onChange={(e) => setDate(e.target.value)} 
    

    return (
        <div className="container">
            <form className='add-form'>
                {/* Date: Expense Date */}
                <div className='form-control'>
                    <label>Expense date</label>
                    <input 
                        type='date'
                        /* value={expenseDate}
                        onChange={(e) => setDate(e.target.value)}  */
                    />
                </div>
                {/* Dropdown: Insurance type */}
                <div className='form-control'>
                    <label>Insurance policy type</label>
                    <select>
                        <option value="Car"> Car </option>
                        <option value="Personal Accident"> Personal Accident </option>
                        <option selected value="Housing"> Housing </option>
                    </select>
                </div>
                {/* Text: Purpose */}
                <div className='form-control'>
                    <label>Purpose</label>
                    <input
                        type='text'
                        placeholder="(e.g. Car Repairs)"
                        /* value={purpose}
                        onChange={(e) => setPurpose(e.currentTarget.checked)} */
                    />
                </div>
                {/* Text: Amount */}
                <div className='form-control'>
                    <label> Amount ($) </label>
                    <input
                        type='text'
                        placeholder="Key in an amount (in SGD)"
                        /* value={amount}
                        onChange={(e) => setAmount(e.currentTarget.checked)}  */ 
                    />
                </div>
                <input type='submit' value='Save Task' className="btn btn-block"/>
            </form>
        </div>
    )
}

export default ClaimForm 