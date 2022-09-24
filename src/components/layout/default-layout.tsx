import styled from '@emotion/styled'
import { DefaultLayoutProps } from './types'

const RootLayout = styled.div``
export function DefautlLayout(props: DefaultLayoutProps) {
  const { children } = props
  return <RootLayout>{children}</RootLayout>
}
