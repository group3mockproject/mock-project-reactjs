import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, Modal, TextField } from '@mui/material';
import { CiEdit } from 'react-icons/ci'

import './LeaseContract.scss'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';



const rows = [
    { resident_id: 1, apartment_id: 1, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 2, apartment_id: 2, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 3, apartment_id: 3, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 4, apartment_id: 4, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 5, apartment_id: 5, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 6, apartment_id: 6, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },
    { resident_id: 7, apartment_id: 7, start_date: '21-06-2024', end_date: '21-06-2026', rent_amount: 10000, deposit_amount: 5000, status: null },

];

const paginationModel = { page: 0, pageSize: 5 };


const LeaseContract = () => {
    const [data, setData] = useState([])
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

    const columns = [
        { field: 'resident_id', headerName: 'RESIDENT ID', width: 140 },
        { field: 'apartment_id', headerName: 'APARTMENT ID', width: 140 },
        { field: 'start_date', headerName: 'START DATE', width: 120 },
        { field: 'end_date', headerName: 'END DATE', width: 120 },
        { field: 'rent_amount', headerName: 'RENT AMOUNT', width: 140 },
        { field: 'deposit_amount', headerName: 'DEPOSIT AMOUNT', width: 140 },
        { field: 'status', headerName: 'STATUS', width: 100 },
        {
            field: "action",
            headerName: "Edit",
            sortable: false,
            // renderCell: ({ row }) => <IconButton onClick={() => alert(row.resident_id)}><CiEdit /></IconButton>
            renderCell: ({ row }) => <IconButton onClick={() => setIsUpdateFormOpen(true)}><CiEdit /></IconButton>
        },
    ]

    useEffect(() => {
        const _data = rows.map(row => ({ ...row, id: row.resident_id }))
        setData(_data)
    }, [])
    return (
        <div className='lease-contract'>
            <h1>MANAGE LEASE CONTRACTS</h1>
            <div className='lease-contract__actions'>
                <form className="lease-contract__search-area">
                    <TextField label='Search...'
                        size="small"
                    />
                    <Button variant='contained'>Search</Button>
                </form>
                <Button
                    variant='contained'
                    onClick={() => setIsCreateFormOpen(true)}
                >Add New Contract</Button>
            </div>
            <div className='lease-contract__table'>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </div>
            <CreateFormModal isOpen={isCreateFormOpen} onClose={() => setIsCreateFormOpen(false)} />
            <UpdateFormModal isOpen={isUpdateFormOpen} onClose={() => setIsUpdateFormOpen(false)} />
        </div>
    );
}




const formFields = [
    { label: 'Resident ID', name: 'resident_id', disabled: false, type: 'number', multiline: false },
    { label: 'Apartment ID', name: 'apartment_id', disabled: false, type: 'number', multiline: false },
    { label: 'Start Date', name: 'start_date', disabled: false, type: 'date', multiline: false },
    { label: 'End Date', name: 'end_date', disabled: false, type: 'date', multiline: false },
    { label: 'Rent Amount', name: 'rent_amount', disabled: false, type: 'number', multiline: false },
    { label: 'Deposit Amount', name: 'deposit_amount', disabled: false, type: 'number', multiline: false },
    { label: 'Status', name: 'status', disabled: false, type: 'text', multiline: false },
    { label: 'Term', name: 'term', disabled: false, type: 'text', multiline: true },
]

const CreateFormModal = ({ isOpen = false, onClose }) => {
    const [data, setData] = useState({
        resident_id: '',
        apartment_id: '',
        start_date: dayjs(),
        end_date: dayjs(),
        rent_amount: '',
        deposit_amount: '',
        status: '',
        term: '',
    })

    const handleChange = ({ key, value }) => {
        // setData({ ...data, [e.target.name]: e.target.value })
        setData({ ...data, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ data })
    }

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            className='lease-contract__modal'
        >
            <div>
                <form onSubmit={handleSubmit} className="lease-contract__form">
                    <h2>Create new lease contract</h2>
                    <FormContent formFields={formFields} data={data} onChange={handleChange} />
                    <Button type='submit' variant='contained'>CREATE</Button>
                </form>
            </div>
        </Modal>
    )
}


const UpdateFormModal = ({ contractId, isOpen = false, onClose }) => {
    const [data, setData] = useState({
        resident_id: '',
        apartment_id: '',
        start_date: dayjs(),
        end_date: dayjs(),
        rent_amount: '',
        deposit_amount: '',
        status: '',
        term: '',
    })

    const handleChange = ({ key, value }) => {
        // setData({ ...data, [e.target.name]: e.target.value })
        setData({ ...data, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ data })
    }

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            className='lease-contract__modal'
        >
            <div>
                <form onSubmit={handleSubmit} className="lease-contract__form">
                    <h2>Update lease contract</h2>
                    <FormContent formFields={formFields} data={data} onChange={handleChange} />
                    <Button type='submit' variant='contained'>UPDATE</Button>
                </form>
            </div>
        </Modal>
    )
}

const FormContent = ({ formFields = [], data, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="lease-contract__form-fields">
                {
                    formFields.map((field) => (
                        field.type != 'date'
                            ? <TextField {...field}
                                key={field.name} value={data[field.name]}
                                onChange={(e) => onChange({ key: field.name, value: e.target.value })} />
                            // : <DatePicker {...field} key={field.name} value={data[field.name]} onChange={onChange} />
                            : <DatePicker {...field}
                                key={field.name} value={data[field.name]}
                                onChange={newValue => onChange({ key: field.name, value: newValue })} />
                    ))
                }
            </div>
        </LocalizationProvider>
    )
}

export default LeaseContract