// ** MUI Imports
import Box from '@mui/material/Box'

// ** Demo Components Imports
import SpkViewOverview from 'src/views/pages/apps/spk/view/SpkViewOverview'

const SpkViewRight = ({ detailData }) => {
  return (
    <Box>
      <SpkViewOverview detailData={detailData} />
    </Box>
  )
}

export default SpkViewRight
