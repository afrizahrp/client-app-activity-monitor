import { isMobile } from 'react-device-detect'
import { useEffect } from 'react'
import { useAppContext } from 'src/context/appContext'
import { Card, Grid } from '@mui/material'

import SpkListGrid from './spkListGrid'
import SpkListCard from './spkListCard'
import SearchContainer from './searchContainer'

const SpkContainer = () => {
  const { getAllSpk, allSpk, page, search, searchStatus, searchType, numOfPages } = useAppContext()

  useEffect(() => {
    getAllSpk()
  }, [page, search, searchStatus, searchType])

  if (isMobile) {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card sx={{ marginBottom: '30px', marginTop: 0 }}>
              <SearchContainer />
            </Card>
            <SpkListCard allSpk={allSpk} />
            {/* {allSpk.map(spk => {
              return <SpkListCard key={spk.spk_id} {...spk} />
            })} */}
          </Grid>
        </Grid>
      </>
    )
  } else {
    return (
      <>
        <Card sx={{ marginBottom: '10px', marginTop: 0 }}>
          <SearchContainer />
        </Card>
        <SpkListGrid allSpk={allSpk} numOfPages={numOfPages} />
      </>
    )
  }
}

export default SpkContainer
