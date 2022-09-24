import { ReactElement } from 'react'
import { useStore } from 'src/hooks/store'

import { AboutConProps } from './types'
import MainPresenter from './Presenter'
import { useRouter } from 'next/router'

const AboutContainer = ({ ...props }: AboutConProps): ReactElement => {
  const { isDark } = useStore()
  const router = useRouter()
  const test = () => {
    console.log('test log', isDark.toString())
    router.push('/')
  }

  return <MainPresenter {...props} test={test}></MainPresenter>
}

//getServerSideProps 사용시 index 파일에 작성
// export const getServerSideProps: GetServerSideProps<
//   AboutConProps
// > = async () => {
//   console.log('about index')
//   const currentDateTime = new Date().getTime()
//   return { props: { date: currentDateTime } }
// }

export default AboutContainer
