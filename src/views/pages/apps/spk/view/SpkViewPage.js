// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components Imports
import SpkViewLeft from 'src/views/pages/apps/spk/view/SpkViewLeft'

import SpkViewRight from 'src/views/pages/apps/spk/view/SpkViewRight'

const SpkView = ({ spk_id }) => {
  // ** State
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const [detailData, setdetailData] = useState(null)

  // const baseUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    axios

      .get(`${process.env.NEXT_PUBLIC_API_URL}/icspkhd/${spk_id}`)
      .then(response => {
        setData(response.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [spk_id])

  useEffect(() => {
    axios

      .get(`${process.env.NEXT_PUBLIC_API_URL}/icspkdt/${spk_id}`)
      .then(response => {
        setdetailData(response.data)
        setError(false)
      })
      .catch(() => {
        setdetailData(null)
        setError(true)
      })
  }, [spk_id])

  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} lg={4}>
          {data.map(HeaderSpk => {
            return <SpkViewLeft key={HeaderSpk.spk_id} {...HeaderSpk} />
          })}
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <SpkViewRight detailData={detailData} />
        </Grid>
      </Grid>
    )
  }
}

export default SpkView
