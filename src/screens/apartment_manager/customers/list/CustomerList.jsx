import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { CiEdit } from 'react-icons/ci';


import './CustomerList.scss'
import ConfirmDialog from '@/components/confirm_dialog/ConfirmDialog';
import { Link } from 'react-router-dom';



const rows = [
  { resident_id: 1, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 2, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 3, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 4, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 5, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 6, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 7, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
  { resident_id: 8, firstname: 'Susan', lastname: 'Smith', dateofbirth: '21-06-2003', email: 'smith123@gmail.com', phone: '0394002409', SSN: '123-45-6789', status: 'Active' },
];

const paginationModel = { page: 0, pageSize: 5 };

const CustomerList = () => {
  const [data, setData] = useState([])
  const [deleteId, setdeleteId] = useState(null)

  const columns = [
    { field: 'resident_id', headerName: 'ID', width: 70 },
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
      renderCell: ({ row }) => <Link className='customer-list__link' to={`${row.resident_id}`}><CiEdit size={27} color='#3498db' /></Link>
    },
    {
      field: 'delete',
      headerName: 'DELETE',
      renderCell: ({ row }) => <IconButton onClick={() => setdeleteId(row.resident_id)}><MdDelete color='#e74c3c' /></IconButton>
    }


  ];


  const handleDelete = ({ id }) => {
    setData(data.filter(row => row.resident_id !== id))
    setdeleteId(null)
  }

  useEffect(() => {
    const _data = rows.map(row => ({ ...row, id: row.resident_id }))
    setData(_data)
  }, [])
  return (
    <div className='customer-list'>
      <h1>MANAGE CUSTOMER</h1>
      <div className='customer-list__search-area'>
        <TextField label='Search...'
          size="small"
        />
        <Button variant='contained'>Search</Button>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
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