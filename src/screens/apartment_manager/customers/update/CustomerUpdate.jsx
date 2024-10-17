import { Button, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useEffect, useState } from 'react'

import './CustomerUpdate.scss'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'


const CustomerUpdate = () => {
    const { id } = useParams()
    const [data, setData] = useState({
        residentId: '',
        firstname: '',
        lastname: '',
        dateofbirth: dayjs(),
        email: '',
        phone: '',
        SSN: '',
        status: ''

    })

    useEffect(() => {
        setData({
            residentId: id,
            firstname: 'Susan',
            lastname: 'Smith',
            dateofbirth: dayjs('2003-06-21'),
            email: 'smith123@example.com',
            phone: '0394002409',
            SSN: '123-45-6789',
            status: 'Active'
        })
    }, [id])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <h1>Customer's information: {data.firstname} {data.lastname}</h1>
            <form className='customer-update'>
                <TextField disabled label='ID' name='resident_id' value={data.residentId} type='number' />
                <TextField label='First Name' name='firstname' value={data.firstname} type='text' />
                <TextField label='Last Name' name='lastname' value={data.lastname} type='text' />
                <DatePicker label='Day Of Birth' name='dateofbirth' value={data.dateofbirth} />
                <TextField label='Email' name='email' value={data.email} type='text' />
                <TextField label='Phone' name='phone' value={data.phone} type='number' />
                <TextField label='SSN' name='SSN' value={data.SSN} type='text' />
                <TextField label='Status' name='status' value={data.status} type='text' />
                <Button variant='contained' type='submit'>UPDATE</Button>
            </form>
        </LocalizationProvider>
    )
}

export default CustomerUpdate