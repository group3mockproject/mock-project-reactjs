import { Alert, Button, Snackbar, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import useFetch from '@/hooks/useFetch'
import axios from 'axios'

import './CustomerUpdate.scss'

const UPADTE_STATUS = {
    IDLE: 'idle',
    SUCCESS: 'success',
    ERROR: 'error',
}

const CustomerUpdate = () => {
    const { id } = useParams()
    const url = import.meta.env.VITE_API_APARTMENT_MANAGER_CUSTOMERS + `/${id}`
    const { data, isLoading, error, setData } = useFetch({ url })
    const [updateStatus, setUpdateStatus] = useState(UPADTE_STATUS.IDLE)

    const handleChange = ({ key, value }) => {
        setData({ ...data, [key]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                ...data,
                dateofbirth: typeof (data.dateofbirth) === 'string'
                    ? data.dateofbirth // The returned value that has not changed is string
                    : data.dateofbirth.format('DD-MM-YYYY') // after change by DatePicker => dayjs's obejct
            }
            // console.log({ payload })
            // console.log({ data })
            await axios.put(url, payload)
            setUpdateStatus(UPADTE_STATUS.SUCCESS)
        } catch (err) {
            setUpdateStatus(UPADTE_STATUS.ERROR)
        }

    }

    const handleCloseToast = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUpdateStatus(UPADTE_STATUS.IDLE)
    };

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Something went wrong!</div>
    return (
        data && <React.Fragment>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h1>Customer's information: {data.firstname} {data.lastname}</h1>
                <form onSubmit={handleSubmit} className='customer-update'>
                    <TextField disabled label='ID' name='resident_id' value={data.id} type='number'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <TextField label='First Name' name='firstname' value={data.firstname} type='text'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <TextField label='Last Name' name='lastname' value={data.lastname} type='text'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <DatePicker label='Day Of Birth' name='dateofbirth' value={dayjs(data.dateofbirth, "DD-MM-YYYY")}
                        format='DD-MM-YYYY'
                        onChange={(value) => handleChange({ key: 'dateofbirth', value: value })} />
                    <TextField label='Email' name='email' value={data.email} type='text'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <TextField label='Phone' name='phone' value={data.phone}
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <TextField label='SSN' name='SSN' value={data.SSN} type='text'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <TextField label='Status' name='status' value={data.status} type='text'
                        onChange={(e) => handleChange({ key: e.target.name, value: e.target.value })} />
                    <Button variant='contained' type='submit'>UPDATE</Button>
                </form>
            </LocalizationProvider >
            <Snackbar
                autoHideDuration={2000}
                open={updateStatus !== UPADTE_STATUS.IDLE}
                onClose={handleCloseToast}
            >
                {
                    <Alert
                        variant='filled'
                        severity={updateStatus}
                        onClose={handleCloseToast}
                    >{updateStatus == UPADTE_STATUS.SUCCESS ? 'Updated successfully!' : 'Something went wrong!'}</Alert>
                }
            </Snackbar>
        </React.Fragment >
    )
}

export default CustomerUpdate