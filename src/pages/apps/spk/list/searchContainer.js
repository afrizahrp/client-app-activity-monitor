import { useAppContext } from 'src/context/appContext'
import { Card, CardHeader, CardContent, Grid } from '@mui/material'
import FormRowSelectNew from 'src/utils/FormRowSelectNew'
import TableHeader from 'src/views/pages/apps/spk/list/TableHeader'

// const SearchContainer = ({ search, searchStatus, searchType }) => {
//   const spkTypeOptions = ['Regular', 'eCatalog', 'Service', 'Manual']

//   // spkType: 'Regular',

//   const spkStatusOptions = ['Progress', 'Will Expire', 'Expired', 'Canceled', 'Completed']

// status_name: 'Progress',
const SearchContainer = () => {
  const { search, searchStatus, searchType, handleChange, clearFilters, spkTypeOptions, spkStatusOptions } =
    useAppContext()

  const handleSearch = e => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    clearFilters()
  }

  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Search and Filters'
            fontSize={9}
            sx={{ pb: 1, pt: 1, '& .MuiCardHeader-subheader': { letterSpacing: '.15px' } }}
          />

          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <TableHeader handleFilter={handleSearch} value={search} />
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormRowSelectNew
                  id='select-type'
                  label='Select Type'
                  labelId='type-select'
                  name='searchType'
                  labelText='Select Type'
                  value={searchType}
                  handleChange={handleSearch}
                  inputProps={{ placeholder: 'Select Type' }}
                  list={['All', ...spkTypeOptions]}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormRowSelectNew
                  id='select-status'
                  label='Select Status'
                  labelId='status-select'
                  name='searchStatus'
                  labelText='Select Status'
                  value={searchStatus}
                  handleChange={handleSearch}
                  inputProps={{ placeholder: 'Select Status' }}
                  list={[...spkStatusOptions, 'All']}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SearchContainer
