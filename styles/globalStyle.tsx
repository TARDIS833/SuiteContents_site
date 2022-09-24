import { css, Global } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
        }
      `}
    />
  )
}

export default GlobalStyles
