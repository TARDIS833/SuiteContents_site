import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RootIndex = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/Main')
  }, [])

  return <></>
}

export default RootIndex
