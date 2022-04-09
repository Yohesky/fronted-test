import React from 'react'
import {screen, render} from '@testing-library/react'
import Store from './Store'

describe('Store', () => {
    it('must have word called pizzeria', () => {
        const store = {
            "id": 1,
            "name": "Pizzeria Capitan America",
            "address": "Calle 1 #2-3",
            "description": "Esta pizzeria se especializa en ingredientes salados",
            "logo": "https://i.imgur.com/G6ZO05Z.png",
            "products": [
              {
                "id": 1,
                "name": "Pizza de Pollo",
                "img": "https://i.imgur.com/qYkqKNf.png"
              },
              {
                "id": 2,
                "name": "Piza Pollo y Champiñones",
                "img": "https://i.imgur.com/G6ZO05Z.png"
              },
              {
                "id": 3,
                "name": "Pizza Vegetales",
                "img": "https://i.imgur.com/vobebZK.png"
              },
              {
                "id": 4,
                "name": "Pizza Vegetales y Atun ",
                "img": "https://i.imgur.com/N10ZJnI.png"
              },
              {
                "id": 5,
                "name": "Pizza 3 Quesos con Champiñones",
                "img": "https://i.imgur.com/DVpPO30.png"
              },
              {
                "id": 6,
                "name": "Pizza Jamon y Queso",
                "img": "https://i.imgur.com/wyuo5Qb.jpg"
              }
            ]
        }
        render(<Store store={store} />)
        expect(screen.getAllByText(/pizzeria/i))
    })
})