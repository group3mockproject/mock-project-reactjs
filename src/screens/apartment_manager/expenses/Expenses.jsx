import React, { useEffect, useState } from 'react'

import './Expenses.scss'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CheckBox } from '@mui/icons-material'

const Expenses = () => {
    const [records, setRecords] = useState([])
    useEffect(() => {
        setRecords(['Approved', 'Pending', 'Rejected'].map(status => ({
            date: '01/01/2022',
            type: 'Maintenance',
            desc: 'Sample Description',
            amount: '$100.00',
            status: status
        })))
    }, [])
    return (
        <div className="expenses">
            <div>
                <h1>Update Expenses</h1>
                <form action="" className='expenses__form'>
                    <FormControl>
                        <InputLabel>Expense Type</InputLabel>
                        <Select
                            required
                            label={'Expense Type'}
                            value={''}
                        >
                            <MenuItem value={1}>Type 1</MenuItem>
                            <MenuItem value={2}>Type 3</MenuItem>
                            <MenuItem value={3}>Type 3</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        label={'Amount'}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">$ </InputAdornment>,
                            },
                        }} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label='Expense Date' required />
                    </LocalizationProvider>
                    <TextField label='Description' multiline rows={4} />
                    <div className='expenses__form-footer'>
                        <FormGroup>
                            <p><b>Verification:</b></p>
                            <FormControlLabel control={<Checkbox required />} label='Verify the legitimacy of the expense claim' />
                        </FormGroup>
                        <Button type='submit' variant='contained' color="success">Update</Button>
                    </div>
                </form>
            </div>
            <div className='expenses__financial-records'>
                <h2>Financial Records</h2>
                {
                    records.map((record, i) => (
                        <FinancialRecord key={i} {...record} />
                    ))
                }
            </div>
        </div>
    )
}


const colorChip = {
    approved: '#28A745',
    pending: '#FFC107',
    rejected: '#DC3545',

}
const FinancialRecord = ({ date, type, desc, amount, status }) => {
    return (
        <div className='expenses__financial-record'>
            <p><span>Date</span>{date}</p>
            <p><span>Expenses Type</span>{type}</p>
            <p><span>Description</span>{desc}</p>
            <p><span>Amount</span>{amount}</p>
            <p className='expenses__financial-record-last-item'>
                <span>Status</span><span className="expenses__chip" style={{ background: `${colorChip[status?.toLowerCase()]}` }}>{status}</span></p>
        </div>
    )
}

export default Expenses