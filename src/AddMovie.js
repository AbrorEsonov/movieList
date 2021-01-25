import { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'
 function AddMovie() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    } 
    
    const addMovie = (e) => {
        if(name === '' || price === ''){
            return alert('Please fill')
        } 
        else{
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: `$` + price, id: Math.random() * 1000}])
        setName('')
        setPrice('')
        }
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="number" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie
