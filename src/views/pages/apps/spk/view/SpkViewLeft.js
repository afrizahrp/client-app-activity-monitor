// ** React Imports
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// import ProductionQtyLimit from '@mui/material'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'

// import CustomAvatar from 'src/@core/components/mui/avatar'

const statusColors = {
  Progress: 'primary',
  Canceled: 'error',
  Completed: 'inherit',
  Expired: 'error',
  Pending: 'info'
}

const SpkViewLeft = ({ spk_id, cust_name, expected_date, status_name, spk_typeName, item_count }) => {
  // ** States
  const [openEdit, setOpenEdit] = useState(false)
  const [openPlans, setOpenPlans] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // Handle Upgrade Plan dialog
  const handlePlansClickOpen = () => setOpenPlans(true)
  const handlePlansClose = () => setOpenPlans(false)

  const expectedDate = new Date(expected_date).toLocaleDateString('id', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  // if (data) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ pt: 0, pl: 0, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <CustomChip
                skin='light'
                size='small'
                color='primary'
                label={spk_typeName}
                sx={{ fontSize: '1rem', borderRadius: '4px' }}
              />
            </Box>
          </CardContent>

          <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {spk_id}
            </Typography>
          </CardContent>

          <CardContent sx={{ my: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
                <Box>
                  <Typography variant='h5' sx={{ lineHeight: 1.3 }}>
                    {item_count} item{item_count > 1 && 's'}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>

          <CardContent>
            <Typography variant='h6'>Details</Typography>
            <Divider sx={{ mt: 4 }} />
            <Box sx={{ pt: 2, pb: 1 }}>
              <Box sx={{ display: 'flex', mb: 2.7 }}>
                <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                  Customer Name:
                </Typography>
                <Typography variant='body2'>{cust_name}</Typography>
              </Box>

              <Box sx={{ display: 'flex', mb: 2.7 }}>
                <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                  Status:
                </Typography>
                <CustomChip
                  skin='light'
                  size='small'
                  label={status_name}
                  sx={{
                    height: 20,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', mb: 2.7 }}>
                <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Expected Date:</Typography>
                <Typography variant='body2'>{expectedDate}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SpkViewLeft
