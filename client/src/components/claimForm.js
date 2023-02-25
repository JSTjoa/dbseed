import { useState } from 'react'

const claimForm = () => {
    const [expenseDate, setDate] = useState('')
    const [claimType, setType] = useState('')
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState('')

    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* Date: Expense Date */}
            <div className='form-control'>
                <label>Expense date</label>
                <input 
                    type='date'
                    value={expenseDate}
                    onChange={(e) => setDate(e.target.value)} 
                />
            </div>
            {/* Dropdown: Insurance type */}
            <div className='form-control'>
                <label>Insurance type</label>
                <input 
                    type='select'
                    placeholder="- Select -"
                    value={claimType}
                    onChange={(e) => setType(e.target.value)}  
                />
            </div>
            {/* Text: Purpose */}
            <div className='form-control'>
                <label>Purpose</label>
                <input
                    type='text'
                    checked={purpose}
                    value={purpose}
                    onChange={(e) => setPurpose(e.currentTarget.checked)}  
                />
            </div>
            {/* Text: Amount */}
            <div className='form-control'>
                <label> Amount ($) </label>
                <input
                    type='text'
                    value={amount}
                    onChange={(e) => setAmount(e.currentTarget.checked)}  
                />
            </div>
            <input type='submit' value='Save Task' className="btn btn-block"/>
        </form>
    )
}

export default Form 