import { useContext } from 'react'
import { MovieContext } from "./MovieContext"
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Abror Esonov</h3>
            <p>List of mine: {movies.length}</p>
        </div>
    )
}

export default Nav
