import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import './ReviewCustomer.scss'

// const rows = [
//   { id: 1, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
// ];

const paginationModel = { page: 0, pageSize: 5 };
const url = import.meta.env.VITE_API_OPERATIONS_MANAGER_CUSTOMERS

const ReviewCustomer = () => {
  const { data, isLoading, error } = useFetch({ url })
  const columns = [
    // { field: 'resident_id', headerName: 'ID', width: 70 },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstname', headerName: 'FIRST NAME', width: 120 },
    { field: 'lastname', headerName: 'LAST NAME', width: 120 },
    { field: 'dateofbirth', headerName: 'DOB', width: 120 },
    { field: 'email', headerName: 'EMAIL', width: 120 },
    { field: 'phone', headerName: 'PHONE', width: 100 },
    { field: 'SSN', headerName: 'SSN', width: 120 },
    { field: 'status', headerName: 'STATUS', width: 80 },
    {
      field: 'view',
      headerName: 'VIEW',
      renderCell: ({ row }) => <Link className='review-customer__link' to={`${row.id}`}>View</Link>
    },

  ];

  return (
    <div className='review-customer'>
      <h1>REVIEW CUSTOMER INFORMATION</h1>
      <div className='review-customer__search-area'>
        <TextField label='Search...'
          size="small"
        />
        <Button variant='contained'>Search</Button>
      </div>
      {
        isLoading && <div>Loading...</div>
      }
      {
        error && <div>Something went wrong!</div>
      }
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
  );
}

export default ReviewCustomer