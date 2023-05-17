// ** React Imports
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CustomChip from 'src/@core/components/mui/chip'
import moment from 'moment'
import Link from 'next/link'

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

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component

const statusColors = {
  Completed: 'secondary',
  Progress: 'success',
  Expired: 'error',
  Pending: 'warning',
  Canceled: 'info'
}

// const SpkListCard = ({ spk_id, cust_name, expected_date, status_name, spk_typeName, item_count } = useAppContext()) => {
const SpkListCard = ({ allSpk }) => {
  let spkDate = moment(allSpk.spk_date)
  spkDate = spkDate.format('DD MMM YYYY')

  let expectedDate = moment(allSpk.expected_date)
  expectedDate = expectedDate.format('DD MMM YYYY')
  const totalSpk = allSpk.length

  const [pageSize, setPageSize] = useState(10)

  const handlePageChange = page => {
    console.log(page)
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Box sx={{ marginBottom: '2px', marginTop: 0 }}>
            <Typography
              variant='title'
              sx={{ mr: 2, color: 'text.primary', alignItems: 'right', justifyContent: 'right', fontSize: '1.25rem' }}
            >
              {totalSpk} Spk found
            </Typography>
          </Box>
        </Grid>

        {allSpk.map(spk => (
          <Grid item xs={12} key={spk.spk_id}>
            {/* <Card
              sx={{
                width: { xs: '100%', sm: '358px', md: '320px' },
                boxShadow: 'none',
                borderRadius: 0
              }}
            ></Card> */}

            <Card
              sx={{ marginBottom: '20px', marginTop: 0, size: 'lg', width: { xs: '100%', sm: '358px', md: '320px' } }}
            >
              <CardContent sx={{ pt: 0, pl: 0, display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', position: 'relative' }}>
                  <CustomChip
                    skin=''
                    color={statusColors[spk.status_name]}
                    size='medium'
                    label={
                      <StyledLink href={`/apps/spk/view/${encodeURIComponent(spk.spk_id)}`} passHref>
                        {spk.spk_id}
                      </StyledLink>
                    }
                    sx={{ fontSize: '1.25rem', borderRadius: '4px' }}
                  />
                </Box>
              </CardContent>
              {/* <CardContent sx={{ pt: 0, pl: 0, display: 'flex', alignItems: 'right', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <CustomChip
                skin='light'
                size='small'
                color='primary'
                label={item_count} //'item{item_count > 1 && 's'}
                sx={{ fontSize: '1rem', borderRadius: '4px' }}
              />
            </Box>
          </CardContent> */}
              <CardContent sx={{ mb: 0 }}>
                <Box sx={{ display: 'flex', mb: 0 }}>
                  <Typography sx={{ mr: 2, fontWeight: 300, variant: 'title' }}>Spk Date :</Typography>
                  <Typography variant='title' sx={{ mr: 2, color: 'text.primary', fontWeight: 300 }}>
                    {spkDate}
                  </Typography>
                </Box>
              </CardContent>
              <CardContent sx={{ mb: 0 }}>
                <Box sx={{ display: 'flex', mb: 0 }}>
                  <Typography sx={{ mr: 2, fontWeight: 300, variant: 'title' }}>Spk Type :</Typography>
                  <Typography variant='title' sx={{ mr: 2, color: 'text.primary', fontWeight: 300 }}>
                    {spk.spk_typeName}
                  </Typography>
                </Box>
              </CardContent>

              <CardContent sx={{ my: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left' }}>
                  <Box sx={{ mr: 6, display: 'flex', alignItems: 'left' }}>
                    {/* <CustomAvatar skin='light' variant='rounded' sx={{ mr: 4, width: 44, height: 44 }}>
                  <ProductionQtyLimit />
                </CustomAvatar> */}
                    <Box>
                      <Typography variant='title' sx={{ lineHeight: 1.3 }}>
                        Qty : {spk.item_count} item{spk.item_count > 1 && 's'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
              <CardContent>
                <Divider sx={{ mt: 2 }} />
                {/* <Box sx={{ pt: 2, pb: 1 }}> */}
                <Box sx={{ display: 'flex', mb: 2.7, width: '100%', size: 'lg' }}>
                  <Typography variant='body2' sx={{ mr: 2, color: 'text.primary' }}>
                    Customer:
                  </Typography>
                  <Typography variant='body2'>{spk.cust_name}</Typography>
                </Box>

                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2 }}>
                    Expected Date :
                  </Typography>
                  <Typography variant='subtitle2'>{expectedDate}</Typography>
                </Box>
                {/* </Box> */}

                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='body2' sx={{ mr: 2, color: 'text.primary' }}>
                    Status :
                  </Typography>
                  <CustomChip
                    skin='light'
                    color={statusColors[spk.status_name]}
                    size='small'
                    label={spk.status_name}
                    sx={{
                      height: 20,
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      borderRadius: '5px',
                      textTransform: 'capitalize'
                    }}
                  />
                </Box>
              </CardContent>
              {/* <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
                Edit
              </Button>
              <Button color='error' variant='outlined'>
                Suspend
              </Button>
            </CardActions> */}
            </Card>
          </Grid>
        ))}
        {/* <Pagination count={totalSpk} page={1} rowsPerpage={10} onRowsPerPageChange={handlePageChange} /> */}
      </Grid>
      {/* <Pagination pageSize={pageSize} itemsCount={totalSpk} /> */}
    </>
  )
}

export default SpkListCard
