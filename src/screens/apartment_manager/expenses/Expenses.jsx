import React, { useState } from 'react'
import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import './Expenses.scss'
import useFetch from '@/hooks/useFetch'
import dayjs from 'dayjs'

/** 
 * expenses
    {
        "id": 1,
        "employee_name": "Susan Smith",
        "outcometype_id": "Salary",
        "amount": 3000.00,
        "sentdate": "2024-01-01",
        "description": "Monthly salary payment",
        "status": "Paid"
    },
 */

const Expenses = () => {

    const { data: expenses, setData: setExpenses } = useFetch({
        url: import.meta.env.VITE_API_APARTMENT_MANAGER_EXPENSES
    })

    const { data: expensesTypes } = useFetch({
        url: import.meta.env.VITE_API_APARTMENT_MANAGER_EXPENSES_TYPES
    })

    const { data: employees } = useFetch({ url: import.meta.env.VITE_API_EMPLOYEES })

    const [formData, setFormData] = useState({
        // employee_id: '',
        employee_id: '',
        outcometype_id: '',
        amount: '',
        sentdate: dayjs(),
        description: '',
        status: "Paid",
    })

    const handleChange = ({ key, value }) => {
        setFormData({ ...formData, [key]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            ...formData,
            employee_id: formData.employee_id.id, // <Autocomple/> return employee object
            sentdate: formData.sentdate.format('YYYY-MM-DD')
        }
        alert(JSON.stringify(payload))

        /** update ui
         * setExpenses(res.data)
         */
    }

    return (
        <div className="expenses">
            <div>
                <h1>Manage Expenses</h1>
                <form onSubmit={handleSubmit} className='expenses__form'>
                    {
                        employees && <Autocomplete
                            required
                            // getOptionLabel={(option) => option.name}
                            options={employees?.map(e => ({ ...e, label: `${e.id} (${e.name})` }))}
                            value={formData.employee_id}
                            onChange={(e, newValue) => handleChange({ key: 'employee_id', value: newValue })}
                            renderInput={(params) => <TextField required {...params} label="Employee ID" />}
                        />
                    }
                    <FormControl>
                        <InputLabel>Expense Type</InputLabel>
                        <Select
                            required
                            label={'Expense Type'}
                            value={formData.outcometype_id}
                            onChange={(e) => handleChange({ key: 'outcometype_id', value: e.target.value })}
                        >
                            {
                                expensesTypes?.map(i => (<MenuItem key={i.id} value={i.id}>{i.type}</MenuItem>))
                            }
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        label={'Amount'}
                        value={formData.amount}
                        onChange={(e) => handleChange({ key: 'amount', value: e.target.value })}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">$ </InputAdornment>,
                            },
                        }} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label='Expense Date' required
                            value={formData.sentdate}
                            onChange={value => handleChange({ key: 'sentdate', value })}
                        />
                    </LocalizationProvider>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                        <RadioGroup
                            defaultValue="Pending"
                            name="status"
                            value={formData.status}
                            onChange={(e) => handleChange({ key: 'status', value: e.target.value })}
                        >
                            <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                        </RadioGroup>
                    </FormControl>
                    <TextField label='Description' multiline rows={4}
                        value={formData.description}
                        onChange={(e) => handleChange({ key: 'description', value: e.target.value })}
                    />
                    <div className='expenses__form-footer'>
                        <FormGroup>
                            <p><b>Verification:</b></p>
                            <FormControlLabel control={<Checkbox required />} label='Verify the legitimacy of the expense claim' />
                        </FormGroup>
                        <Button type='submit' variant='contained' color="success">Submit</Button>
                    </div>
                </form>
            </div>
            <div className='expenses__financial-records'>
                <h2>Financial Records</h2>
                {
                    expenses?.map((record, i) => (
                        <FinancialRecord key={i} {...record} />
                    ))
                }
            </div>
        </div>
    )
}


const colorChip = {
    paid: '#28A745',
    pending: '#FFC107',
    rejected: '#DC3545',

}
const FinancialRecord = ({ employee_name, outcometype, amount, sentdate, description, status }) => {
    return (
        <div className='expenses__financial-record'>
            <p><span>Employee name</span>{employee_name}</p>
            <p><span>Type</span>{outcometype}</p>
            <p><span>Date</span>{sentdate}</p>
            <p><span>Description</span>{description}</p>
            <p><span>Amount</span>${amount}</p>
            <p className='expenses__financial-record-last-item'>
                <span>Status</span><span className="expenses__chip" style={{ background: `${colorChip[status?.toLowerCase()]}` }}>{status}</span></p>
        </div>
    )
}

export default Expenses

