import { useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$12',
            id: 256478655
        },
        {
            name: 'Inception',
            price: '$10',
            id: 12325
        }
    ]);
    return(
    <MovieContext.Provider value={[movies, setMovies]}>
        {children}
    </MovieContext.Provider>
    )
}