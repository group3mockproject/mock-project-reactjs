import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';

import './Income.scss'
import { DataGrid } from '@mui/x-data-grid';
import { TfiTrash } from "react-icons/tfi";
import { CiEdit } from 'react-icons/ci';
import { PieChart } from '@mui/x-charts';

const incomeData = [
  { month: 1, income: 2000000000 },
  { month: 2, income: 3000000000 },
  { month: 3, income: 4000000000 },
  { month: 4, income: 3200000000 },
  { month: 6, income: 6000000000 },
  { month: 7, income: 4500000000 },
  { month: 8, income: 2000000000 },
  { month: 9, income: 2100000000 },
  { month: 10, income: 3000000000 },
  { month: 11, income: 7000000000 },
  { month: 12, income: 9000000000 },
]

const pageSizeModel = { page: 0, pageSize: 5 }

const fieldTables = [
  { field: 'name', headerName: 'NAME', width: 120 },
  { field: 'number', headerName: 'NUMBER', width: 120 },
  { field: 'email', headerName: 'EMAIL', width: 120 },
  { field: 'phone', headerName: 'PHONE', width: 120 },
  {
    field: 'status', headerName: 'STATUS', width: 120,
    renderCell: ({ row }) => <Chip label={row.status} type={row.status?.toLowerCase()} />
  },
  {
    field: 'actions',
    headerName: 'ACTIONS',
    renderCell: ({ row }) => (
      <>
        <IconButton onClick={() => setdeleteId(row.resident_id)}><CiEdit /></IconButton>
        <IconButton onClick={() => setdeleteId(row.resident_id)}><TfiTrash /></IconButton>
      </>
    )
  }
]

const dataTable = [
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'New' },
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'Unqualified' },
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'Contacted' },
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'Reviewing' },
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'New' },
  { name: 'Susan Smith', number: 1234, email: 'smith123@gmail.com', phone: '0394002409', status: 'New' },
]

const Income = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <div className="income">
      <div className='income__line-chart income__card'>
        <h2>INCOME</h2>
        <LineChart
          dataset={incomeData}
          width={700}
          xAxis={[{ dataKey: 'month' }]}
          series={[{ dataKey: 'income', }]}
          height={350}
          grid={{ vertical: true, horizontal: true }}
          margin={{ left: 100 }}
        />
      </div>
      <div className='income__table income__card'>
        <DataGrid
          columns={fieldTables}
          rows={dataTable.map((r, i) => ({ ...r, id: i }))}
          initialState={{ pagination: { pageSizeModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          checkboxSelection
        />
      </div>
      <div className="income__financial income__card">
        <div>
          <h2 className='income__text-blue'>Financial</h2><br />
          <p className='income__text-blue'><b>$ 2850.75</b> </p>
          <p className='income__text-gray'>Current balance</p><br />
          <p className='income__text-green'><b>$ 1500.50</b> </p>
          <p className='income__text-gray'>Income</p><br />
          <p className='income__text-red'><b>$ 350.60 </b> </p>
          <p className='income__text-gray'>Expenses</p>
        </div>
      </div>
      <div className="income__type-of-income income__card">
        <h2>TYPE OF INCOME</h2>
        <small className='income__text-gray'>Hover each area to see details</small>
        <div className='income__circle-chart'>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'Type A' },
                  { id: 1, value: 15, label: 'Type B' },
                  { id: 2, value: 20, label: 'Type C' },
                  { id: 3, value: 23, label: 'Type D' },
                  { id: 4, value: 30, label: 'Type E' },
                  { id: 5, value: 22, label: 'Type F' },
                ],
              },
            ]}
            // slotProps={{ legend: { hidden: true } }}
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}


const Chip = ({ label, type }) => {
  return (
    <div className={`income__chip income__chip--${type}`}>
      {label}
    </div>
  )
}

export default Income