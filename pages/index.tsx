import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Top from './top'


const Home: NextPage = () => {
  const router = useRouter()


  return (
    <>
          <Top/>
    </>
  )
}

export default Home
