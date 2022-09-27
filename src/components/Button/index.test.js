import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

test('should not allowed click button if isDisabled is preset', () => {
    const { container } = render(<Button isDisabled></Button>)
    const spanDisabled = container.querySelector('span.disabled')
    expect(spanDisabled).toBeInTheDocument()
})

test('should render loading/spinner', () => {
    const { container, getByText } = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
    const { container } = render(<Button type="link" isExternal></Button>)
    expect(container.querySelector('a')).toBeInTheDocument()
})

test('should render <Link> component', () => {
    const { container } = render(
        <Router>
            <Button type="link"></Button>
        </Router>
    )
    expect(container.querySelector('a')).toBeInTheDocument()
})