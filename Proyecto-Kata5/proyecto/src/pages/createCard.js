import React, {useEffect, useState}  from 'react';
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import '../estilosInicio.css';

// let API_KEY = "2dbc6cfb9f0b204e19642c36f4bd9762";

const arrayColores = [
    {
        color: 'rojo',
        pelicula1: 200
    },
    {
        color: 'azul',
        pelicula1: 200
    },
    {
        color: 'azul',
        pelicula1: 100
    }
];

function CreateCard() {

    React.useEffect(() => {
    }, []);

    // const [moviesArray, setMovies] = useState([]);

    // const getPeliculas = async () =>{
    //     try {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/200?api_key=${API_KEY}&language=es-US`).then(function(response){
    //             return response.json();
                
    //         })
    //         setMovies(response.id)

    //         console.log(moviesArray)

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // getPeliculas();
    return(
        <>
                <ListCard>
                    {arrayColores.map((index) => <Card color={index}/>)}
                {/* {moviesArray.map((index) => <Card key={index}/> )} */}
                </ListCard>
        </>
    );
}

export default CreateCard;