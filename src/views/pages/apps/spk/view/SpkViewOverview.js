import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'

import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import TableContainer from '@mui/material/TableContainer'

import Grid from '@mui/material/Grid'

import CustomChip from 'src/@core/components/mui/chip'

// import Link from 'next/link'
// import LinearProgress from '@mui/material/LinearProgress'
// import CardHeader from '@mui/material/CardHeader'

// const StyledLink = styled(Link)(({ theme }) => ({
//   fontWeight: 600,
//   fontSize: '1rem',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   color: theme.palette.text.secondary,
//   '&:hover': {
//     color: theme.palette.primary.main
//   }
// }))

const SpkViewOverView = ({ detailData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ mb: 2 }}>
          <CardContent sx={{ pt: 0, pl: 0, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <CustomChip
                skin='light'
                size='small'
                color='primary'
                label='Item List'
                sx={{ fontSize: '1rem', borderRadius: '4px' }}
              />
            </Box>
          </CardContent>

          <TableContainer>
            <Table size='small' sx={{ minWidth: 600 }}>
              <TableHead sx={{ backgroundColor: 'customColors.tableHeaderBg' }}>
                <TableRow>
                  <TableCell sx={{ height: '3.375rem' }}>Description</TableCell>
                  <TableCell sx={{ height: '3.375rem' }}>Qty</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {detailData?.map(item => (
                  <TableRow hover key={item.id} sx={{ '&:last-of-type td': { border: 0 } }}>
                    <TableCell sx={{ width: 520 }}>
                      <Typography variant='body'>{item.item_descs}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='body2' sx={{ color: 'text.primary' }}>
                        {item.spk_qty} {item.uom_cd}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SpkViewOverView
