import {useEffect, useState} from 'react'
import Character from './Character';

//Component NavBar
function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
            onClick={() => props.setpage(props.page + 1)}
            >
                Page {props.page + 1}
            </button>
        </header>
    )
}



function CharacterList() {
    //UsesState are the React variables
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setpage] =useState(1);

    //Make a request to the API 
    useEffect(() => {
        async function fetchData() {
        //await declared this function is async and gona to delay for the request
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); 
        const data = await response.json();
        setLoading(false)
        setCharacters(data.results);
        }
        
        //Invoke the function
        fetchData() 
    }, [page]);

    return (
        <div className='container '>

        <NavPage page={page} setpage={setpage}/>

        {
            loading ? (<h1>loading...</h1>) : (
            <div className='row'>
            {characters.map((character) => {
            return(
                <div className='col-md-4' key={character.id} >
                    <Character character={character}  />
                </div>
                );
        })}
        </div>
        )}

        <NavPage page={page} setpage={setpage}/>

        </div>
    )
}

export default CharacterList