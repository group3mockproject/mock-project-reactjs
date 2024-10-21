import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Button, TextField } from '@mui/material';

import './Timekeeping.scss'
import useFetch from '@/hooks/useFetch';

const columns = [
    { field: 'timekeep_id', headerName: 'ID', width: 70 },
    { field: 'employee_name', headerName: 'NAME', width: 200 },
    { field: 'start_time', headerName: 'START TIME', width: 130 },
    { field: 'end_time', headerName: 'END TIME', /** type: 'number',  */width: 90, },
    { field: 'wdate', headerName: 'DAY', /** type: 'number',  */width: 140, },
    { field: 'status', headerName: 'STATUS', /** type: 'number',  */width: 90, },

];

// const rows = [
//     { timekeep_id: 1, start_time: '7:00', end_time: '7:00', wdate: '21-06-2014', employee_name: 'Susan Jon', status: null },
// ];

const paginationModel = { page: 0, pageSize: 5 };

const Timekeeping = () => {
    const { data, error, isLoading } = useFetch({ url: import.meta.env.VITE_API_ADMIN_TIMEKEEPING })

    return (
        <div className='timekeeping'>
            <h1>MANAGE TIMEKEEPING</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className='timekeeping__search-area'>
                    <TextField label='Search...'
                        size="small"
                    />
                    <DatePicker
                        label="Workday"
                        slotProps={{ textField: { size: 'small' } }}
                    />
                    <Button variant='contained'>Search</Button>
                </div>
            </LocalizationProvider>
            {
                isLoading && <div>Loading...</div>
            }
            {
                error && <div>Something went wrong!</div>
            }
            {
                data && <DataGrid
                    rows={data.map(r => ({ ...r, id: r.timekeep_id }))}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            }
        </div>
    );
}

export default Timekeeping