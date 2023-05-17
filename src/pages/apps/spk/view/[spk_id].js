import axios from 'axios'
import SpkViewPage from 'src/views/pages/apps/spk/view/SpkViewPage'

const SpkView = ({ spk_id }) => {
  const encodedId = encodeURIComponent(spk_id)

  return <SpkViewPage spk_id={encodedId} />
}

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/icspkhd/`)
  const spkhdData = res.data

  const paths = spkhdData.map(item => ({
    params: { spk_id: `${item.spk_id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/icspkhd/${params}`)

  const spkdtData = res.data

  return {
    props: {
      spkdtData,
      spk_id: params?.spk_id
    }
  }
}

export default SpkView
