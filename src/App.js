import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import ProfileCardList from './ProfileCardList';
import SearchBar from './SearchBar';

const App = () => {

    const [ searchField, setSearchField ] = useState('') ;
    const [ cats, setCats ] = useState([]) ;

    const onSearchChange = (event) => {
        setSearchField(event.target.value) ;
        console.log(searchField) ;
    }

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase()) ;
    })

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => setCats(users) )
    },[])

    return (
        <div>
            <h1 className='text-center my-3 ' >Cat Friends</h1>
            <SearchBar onSearchChange={onSearchChange} />
            <ProfileCardList Cats={filteredCats} />
        </div>
    )
}

export default App ;