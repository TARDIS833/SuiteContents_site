import { render } from '@testing-library/react'
import Button from 'src/components/common/button'

describe('Button', () => {
  it('renders a button', () => {
    const { container } = render(<Button />)

    expect(container).toMatchSnapshot()
  })
})
