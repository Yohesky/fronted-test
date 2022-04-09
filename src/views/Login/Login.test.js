import React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './Login'



describe('Test LoginComponent', () => {

    beforeEach(() => {
        render(<Login />)
    })

    it('Component MainContentLogin should be showing', () => {

        expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument()
        expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument()
        userEvent.click(screen.getByText(/Iniciar Sesión/i))
    })
})