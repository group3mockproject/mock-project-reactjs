import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, TextField } from '@mui/material';
import { CiEdit } from 'react-icons/ci'

import './LeaseContract.scss'



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

    const columns = [
        { field: 'resident_id', headerName: 'RESIDENT ID', width: 140 },
        { field: 'apartment_id', headerName: 'APARTMENT ID', width: 140 },
        { field: 'start_date', headerName: 'START DATE', width: 140 },
        { field: 'end_date', headerName: 'END DATE', width: 140 },
        { field: 'rent_amount', headerName: 'RENT AMOUNT', width: 140 },
        { field: 'deposit_amount', headerName: 'DEPOSIT AMOUNT', width: 140 },
        { field: 'status', headerName: 'STATUS', width: 140 },
        {
            field: "action",
            headerName: "Edit",
            sortable: false,
            renderCell: ({ row }) => <IconButton onClick={() => alert(row.resident_id)}><CiEdit /></IconButton>
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
                <Button variant='contained'>Add New Contract</Button>
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
        </div>
    );
}

export default LeaseContract