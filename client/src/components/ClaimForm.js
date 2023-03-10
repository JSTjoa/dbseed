import { useState } from 'react'
import './claimForm.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './Button';
import { useNavigate } from "react-router-dom";


const ClaimForm = () => {
    const [expenseDate, setDate] = useState('')
    const [claimType, setType] = useState('placeholder')
    const [purpose, setPurpose] = useState('')
    const [amount, setAmount] = useState('')
    let navigate = useNavigate();
    function onHandleClick123() {
        navigate('/login');
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!expenseDate) {
            alert('Please add an expense date')
            return
        }
        if(claimType == 'placeholder') {
            alert('Please add a claim type')
            return
        }
        if(!purpose) {
            alert('Please add a claim purpose')
            return
        }
        if(!amount) {
            alert('Please add a claim amount')
            return
        }
        setDate('')
        setType('placeholder')
        setPurpose('')
        setAmount('')
    }

    return (
        <div>
{/*             <Button buttonStyle='btn--back' onClick={()=>{onHandleClick123()}}> Back </Button>
 */}
            <div className="container">
            <h2> New Claim </h2>
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
                        <label>Insurance policy type</label>
                        <select onChange={(e) => setType(e.currentTarget.value)}>
                            <option value="placeholder" selected> - Select - </option>
                            <option value="Car"> Car </option>
                            <option value="Personal Accident"> Personal Accident </option>
                            <option value="Housing"> Housing </option>
                        </select>
                    </div>
                    {/* Text: Purpose */}
                    <div className='form-control'>
                        <label>Purpose</label>
                        <input
                            type='text'
                            placeholder="(e.g. Car Repairs)"
                            value={purpose}
                            onChange={(e) => setPurpose(e.currentTarget.value)}
                        />
                    </div>
                    {/* Text: Amount */}
                    <div className='form-control'>
                        <label> Amount ($) </label>
                        <input
                            type='number'
                            placeholder="Key in an amount (in SGD)"
                            value={amount}
                            onChange={(e) => setAmount(e.currentTarget.value)} 
                        />
                    </div>
                    <input type='submit' value='Submit' className="btn btn-block"/>
                </form>
            </div>
        </div>
    )
}

export default ClaimForm 