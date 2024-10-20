import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { CiEdit } from 'react-icons/ci';
import ConfirmDialog from '@/components/confirm_dialog/ConfirmDialog';
import { Link } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import './CustomerList.scss'
import axios from 'axios';

// const rows = [
//   { id: 1, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' }
// ];

const paginationModel = { page: 0, pageSize: 5 };
const url = import.meta.env.VITE_API_APARTMENT_MANAGER_CUSTOMERS

const CustomerList = () => {
  const { data, isLoading, error, setData } = useFetch({ url })
  const [deleteId, setdeleteId] = useState(null)

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstname', headerName: 'FIRST NAME', width: 120 },
    { field: 'lastname', headerName: 'LAST NAME', width: 120 },
    { field: 'dateofbirth', headerName: 'DOB', width: 120 },
    { field: 'email', headerName: 'EMAIL', width: 120 },
    { field: 'phone', headerName: 'PHONE', width: 100 },
    { field: 'SSN', headerName: 'SSN', width: 120 },
    { field: 'status', headerName: 'STATUS', width: 80 },
    {
      field: 'edit',
      headerName: 'EDIT',
      renderCell: ({ row }) => <Link className='customer-list__link' to={`${row.id}`}><CiEdit size={27} color='#3498db' /></Link>
    },
    {
      field: 'delete',
      headerName: 'DELETE',
      renderCell: ({ row }) => <IconButton onClick={() => setdeleteId(row.id)}><MdDelete color='#e74c3c' /></IconButton>
    }


  ];

  const handleDelete = async ({ id }) => {
    try {
      const res = await axios.delete(`${url}/${id}`)
      if (res.status === 200) {
        setData(data.filter(row => row.id !== id))
      }
    } catch (e) {
      alert("Something went wrong!")
    } finally {
      setdeleteId(null)
    }
  }

  return (
    <div className='customer-list'>
      <h1>MANAGE CUSTOMER</h1>
      <div className='customer-list__search-area'>
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
          // getRowId={ row => row.resident_id}
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      }
      <div className="customer-list__button-group">
        <Button variant='contained'>View report</Button>
        <Button variant='contained'>Export</Button>
      </div>
      {deleteId &&
        <ConfirmDialog
          isOpen={deleteId != null}
          handleClose={() => setdeleteId(null)}
          handleAccept={() => handleDelete({ id: deleteId })}
          title='Delete Customer'
          content={`Delete customer with id ${deleteId}`}
        />}
    </div>
  );
}

export default CustomerList