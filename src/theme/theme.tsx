import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    green: {
      main: '#38C25B',
      contrastText: '#ffffff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#38C25B',
    },
    darkGreen: {
      main: '#32922B',
      contrastText: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, .125)',
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary']
    white: Palette['primary']
    darkGreen: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    green?: PaletteOptions['primary']
    white?: PaletteOptions['primary']
    darkGreen?: PaletteOptions['primary']
  }
}
