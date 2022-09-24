import GlobalStyles from '../styles/globalStyle'
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'fullscreen',
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'gray',
        value: '#F3F5FB',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'blue',
        value: '#2E48A0',
      },
    ],
  },
}
