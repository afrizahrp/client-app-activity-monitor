import { useState } from 'react'
import Link from 'next/link'
import { Card, Grid, Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'

const StyledLink = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const columns = [
  {
    flex: 0.1,
    minWidth: 90,
    field: 'spkDate',
    headerName: 'Date',
    renderCell: ({ row }) => {
      const spkDate = new Date(row.spk_date).toLocaleDateString('id', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })

      return (
        <Typography noWrap variant='body2'>
          {spkDate}
        </Typography>
      )
    }
  },

  {
    flex: 0.15,
    minWidth: 255,
    field: 'spk_id',
    headerName: 'Id',

    renderCell: ({ row }) => {
      const { spk_id } = row

      const encodedId = encodeURIComponent(row.spk_id)

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <StyledLink href={`/apps/spk/view/${encodedId}`} passHref>
              {row.spk_id}
            </StyledLink>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.15,
    minWidth: 360,
    field: 'cust_name',
    headerName: 'Customer Name',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.cust_name}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'item_count',
    headerName: 'Item Qty',
    width: 20,
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2' align='right'>
          {row.item_count} item{row.item_count > 1 && 's'}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'expecteDate',
    headerName: 'Expected',
    renderCell: ({ row }) => {
      const now = new Date().getTime()

      const expectedDate = new Date(row.expected_date).toLocaleDateString('id', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })

      return (
        <Typography noWrap variant='body2'>
          {expectedDate}
        </Typography>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.status_name}
        </Typography>
      )
    }
  }
]

const SpkListGrid = ({ allSpk }) => {
  const [pageSize, setPageSize] = useState(10)

  return (
    <>
      <Grid item xs={12}>
        <Card sx={{ '--Card-padding': '15px' }}>
          <DataGrid
            autoHeight
            rowHeight={45}
            rows={allSpk}
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={row => row.spk_id}
            sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          />
        </Card>
      </Grid>
    </>
  )
}

export default SpkListGrid
