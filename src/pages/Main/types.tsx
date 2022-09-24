//Main Container Props
export interface MainConProps {}

//Main Presenter Props
export interface MainPreProps extends MainConProps {
  test?: () => void
  isDark?: boolean
  toggleIsDark?: () => void
}
export interface BackgroundProps {
  isDark?: boolean
}
