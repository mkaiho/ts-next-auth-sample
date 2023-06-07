import { Typography } from '@mui/material'
import {
  DataGrid,
  DataGridProps,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'

import { User, useHooks } from './hooks'

import LoadingPanel from '@/components/LoadingPanel'

export default function UsersList() {
  const { isLoading, users } = useHooks()

  if (isLoading) {
    return <LoadingPanel />
  } else if (!users.length) {
    return <Typography>no data</Typography>
  }

  return (
    <>
      <DataGrid {...buildUsersGridProps(users)} />
    </>
  )
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

const buildUsersGridProps = (data: User[]): DataGridProps => {
  return {
    rows: data.map((d) => ({
      id: d.id,
      name: d.name,
      email: d.email,
    })),
    columns: [
      { field: 'id', headerName: 'ID' },
      { field: 'name', headerName: 'NAME' },
      { field: 'email', headerName: 'EMAIL' },
    ],
    slots: {
      toolbar: CustomToolbar,
    },
  }
}
