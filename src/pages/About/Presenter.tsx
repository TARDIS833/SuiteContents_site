import { ReactElement } from 'react'

// import Button from 'src/components/common/button'
import { AboutPreProps } from './types'

const AboutPresenter = ({ test }: AboutPreProps): ReactElement => {
  //UI
  return (
    <>
      <h1>About</h1>
      {/* <Button onClick={test} text={'button'}></Button> */}
    </>
  )
}

export default AboutPresenter
