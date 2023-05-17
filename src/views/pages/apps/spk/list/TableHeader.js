import { useAppContext } from 'src/context/appContext'

import TextField from '@mui/material/TextField'

const TableHeader = () => {
  const { search, handleChange } = useAppContext()

  const handleSearch = e => {
    handleChange({ name: e.target.name, value: e.target.value })
  }

  return (
    <TextField
      fullWidth={true}
      size='medium'
      name='search'
      value={search}
      sx={{ mr: 6, mb: 2 }}
      onChange={e => handleChange({ name: e.target.name, value: e.target.value })}
      placeholder='Search by Customer Name or Spk Id'
    />
  )
}

export default TableHeader
