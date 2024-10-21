import React, { createContext, useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Autocomplete, Button, IconButton, Modal, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { CiEdit } from 'react-icons/ci'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import useFetch from '@/hooks/useFetch';

import './LeaseContract.scss'

/**
 * { "id": 7, "resident_id": 7, "apartment_id": 7, "start_date": "2024-06-21", 
 * "end_date": "2026-06-21", "rent_amount": 10000, "deposit_amount": 5000, "status": "Active" },
 */

const paginationModel = { page: 0, pageSize: 5 };
const DataContext = createContext()

const LeaseContract = () => {

    const { data } = useFetch({ url: import.meta.env.VITE_API_APARTMENT_MANAGER_LEASE_CONTRACTS })
    const { data: residents } = useFetch({ url: import.meta.env.VITE_API_RESIDENTS })
    const { data: apartments } = useFetch({ url: import.meta.env.VITE_API_APARTMENTS })

    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
    const [dataForUpdate, setDataForUpdate] = useState(null);

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
            renderCell: ({ row }) => <IconButton onClick={() => setDataForUpdate(row)}><CiEdit /></IconButton>
        },
    ]

    return (
        <DataContext.Provider value={{ residents, apartments }}>
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
                    {
                        data && <DataGrid
                            rows={data}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            sx={{ border: 0 }}
                        />
                    }
                </div>
                {
                    isCreateFormOpen &&
                    <CreateFormModal isOpen={isCreateFormOpen}
                        onClose={() => setIsCreateFormOpen(false)} />
                }

                {
                    dataForUpdate && <UpdateFormModal
                        inittialData={dataForUpdate} isOpen={dataForUpdate != null}
                        onClose={() => setDataForUpdate(null)} />
                }
            </div>
        </DataContext.Provider>
    );
}




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
        const payload = {
            ...data,
            start_date: data.start_date.format('YYYY-MM-DD'),
            end_date: data.end_date.format('YYYY-MM-DD'),
            apartment_id: data.apartment_id.id,// <Autocomple/> return apartment object
            resident_id: data.resident_id.id // <Autocomple/> return resident object
        }
        // console.log({ data })
        console.log({ payload })
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
                    <FormContent data={data} onChange={handleChange} />
                    <Button className='lease-contract__form-button' type='submit' variant='contained'>CREATE</Button>
                </form>
            </div>
        </Modal>
    )
}


const UpdateFormModal = ({ inittialData, isOpen = false, onClose }) => {

    const { residents, apartments } = useContext(DataContext)
    const resident = residents.find(r => r.id === inittialData.resident_id)
    const apartment = apartments.find(a => a.id === inittialData.apartment_id)
    const mappedData = (data) => {
        return {
            ...data,
            start_date: dayjs(data.start_date),
            end_date: dayjs(data.end_date),
            resident_id: { ...resident, label: `${resident.id} (${resident.name})` },
            apartment_id: { ...apartment, label: `${apartment.id} (${apartment.name})` }
        };
    }
    const { data, setData, isLoading } = useFetch({
        url: import.meta.env.VITE_API_APARTMENT_MANAGER_LEASE_CONTRACTS + `/${inittialData.id}`,
        mappedData
    })
    // const [data, setData] = useState({
    //     resident_id: '',
    //     apartment_id: '',
    //     start_date: dayjs(),
    //     end_date: dayjs(),
    //     rent_amount: '',
    //     deposit_amount: '',
    //     status: '',
    //     term: '',
    // })

    const handleChange = ({ key, value }) => {
        // setData({ ...data, [e.target.name]: e.target.value })
        setData({ ...data, [key]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            ...data,
            start_date: data.start_date.format('YYYY-MM-DD'),
            end_date: data.end_date.format('YYYY-MM-DD'),
            apartment_id: data.apartment_id.id,// <Autocomple/> return apartment object
            resident_id: data.resident_id.id // <Autocomple/> return resident object
        }
        // console.log({ data })
        console.log({ payload })
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
                    {
                        isLoading && <div> Loading...</div>
                    }
                    {(data && typeof (data.start_date) !== 'string') &&
                        <FormContent data={data} onChange={handleChange} />
                    }
                    <Button className='lease-contract__form-button' type='submit' variant='contained'>UPDATE</Button>
                </form>
            </div>
        </Modal>
    )
}

const FormContent = ({ data, onChange }) => {

    const { residents, apartments } = useContext(DataContext)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="lease-contract__form-fields">
                {
                    residents && <Autocomplete
                        required
                        // getOptionLabel={(option) => option.name}
                        options={residents.map(i => ({ ...i, label: `${i.id} (${i.name})` }))}
                        value={data.resident_id}
                        onChange={(e, newValue) => onChange({ key: 'resident_id', value: newValue })}
                        renderInput={(params) => <TextField required {...params} label="Resident ID" />}
                    />
                }
                {
                    apartments && <Autocomplete
                        required
                        // getOptionLabel={(option) => option.name}
                        options={apartments.map(i => ({ ...i, label: `${i.id} (${i.name})` }))}
                        value={data.apartment_id}
                        onChange={(e, newValue) => onChange({ key: 'apartment_id', value: newValue })}
                        renderInput={(params) => <TextField required {...params} label="Apartment ID" />}
                    />
                }

                <DatePicker label='Start Date' value={data.start_date}
                    onChange={(newValue) => onChange({ key: 'start_date', value: newValue })}
                />
                <DatePicker label='End Date' value={data.end_date}
                    onChange={(newValue) => onChange({ key: 'end_date', value: newValue })}
                />
                <TextField label='Rent Amount' type='number' value={data.rent_amount}
                    onChange={(e) => onChange({ key: 'rent_amount', value: e.target.value })}
                />
                <TextField label='Deposit Amount' type='number' value={data.deposit_amount}
                    onChange={(e) => onChange({ key: 'deposit_amount', value: e.target.value })}
                />
                <TextField label='Term' type='text' value={data.term} multiline={true}
                    onChange={(e) => onChange({ key: 'term', value: e.target.value })}
                />
                <TextField label='Status' type='text' value={data.status}
                    onChange={(e) => onChange({ key: 'status', value: e.target.value })}
                />
            </div>
        </LocalizationProvider>
    )
}

export default LeaseContract