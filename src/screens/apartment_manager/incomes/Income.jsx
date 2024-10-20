import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';
import { PieChart } from '@mui/x-charts';
import useFetch from '@/hooks/useFetch';

import './Income.scss'

// const incomeData = [
//   { month: 1, income: 2000000000 },
//   { month: 2, income: 3000000000 },
//   { month: 3, income: 4000000000 },
//   { month: 4, income: 3200000000 },
//   { month: 6, income: 6000000000 },
//   { month: 7, income: 4500000000 },
//   { month: 8, income: 2000000000 },
//   { month: 9, income: 2100000000 },
//   { month: 10, income: 3000000000 },
//   { month: 11, income: 7000000000 },
//   { month: 12, income: 9000000000 },
// ]

const pageSizeModel = { page: 0, pageSize: 5 }

const fieldTables = [
  { field: 'employee_name', headerName: 'NAME', width: 120 },
  { field: 'income_type', headerName: 'INCOME TYPE', width: 120 },
  { field: 'amount', headerName: 'AMOUNT', width: 100 },
  { field: 'receivedate', headerName: 'RECEIVE DATE', width: 120 },
  { field: 'description', headerName: 'DESCRIPTION', width: 120 },
  {
    field: 'status', headerName: 'STATUS', width: 120,
    renderCell: ({ row }) => <Chip label={row.status} type={row.status?.toLowerCase()} />
  },
]

// const dataTable = [

//   {
//     "id": 1,
//     "employee_name": "Susan Smith",
//     "income_type": "Salary",
//     "amount": 3000.00,
//     "receivedate": "2024-01-01",
//     "description": "Monthly salary payment",
//     "status": "Paid"
// },
// ]

const Income = () => {
  const { data: incomeData, isLoading: isIncomeLoading } =
    useFetch({ url: import.meta.env.VITE_API_APARTMENT_MANAGER_INCOMES_LINE_CHART })

  const { data: dataTable, isLoading: isDataTableLoading } =
    useFetch({ url: import.meta.env.VITE_API_APARTMENT_MANAGER_INCOMES_TABLE })

  const { data: incomeTypes, isLoading: isIncomeTypesLoading } =
    useFetch({ url: import.meta.env.VITE_API_APARTMENT_MANAGER_INCOMES_CIRCLE_CHART })

  return (
    <div className="income">
      <div className='income__line-chart income__card'>
        <h2>INCOME</h2>
        {
          isIncomeLoading && (
            <div>Loading...</div>
          )
        }
        {
          incomeData && <LineChart
            dataset={incomeData}
            width={700}
            xAxis={[{ dataKey: 'month' }]}
            series={[{ dataKey: 'income', }]}
            height={350}
            grid={{ vertical: true, horizontal: true }}
            margin={{ left: 100 }}
          />
        }
      </div>
      <div className='income__table income__card'>
        {
          isDataTableLoading && (
            <div>Loading...</div>
          )
        }
        {
          dataTable && <DataGrid
            columns={fieldTables}
            rows={dataTable}
            initialState={{ pagination: { pageSizeModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
            checkboxSelection
          />
        }
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
          {
            isIncomeTypesLoading && (
              <div>Loading...</div>
            )
          }
          {incomeTypes && <PieChart
            series={[{ data: incomeTypes },]}
            slotProps={{ legend: { hidden: true } }}
            width={200}
            height={200}
            margin={{ right: -5, top: 50 }}
          />}
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