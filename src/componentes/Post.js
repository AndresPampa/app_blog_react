import React from "react";
import posts from '../data/post';
import {useParams, Navigate} from 'react-router-dom';

const Post = () =>{

    const {id} = useParams();

    return (
        <>
            {
            posts[id-1] ?
            <div>
                <h1>{posts[id - 1].titulo}</h1>
                <p>{posts[id - 1].texto}</p>
            </div>
            :
            // <div>
            //     <h1>El Articulo que buscas no existe</h1>
            // </div>
            <Navigate replace to="/" /> //redirecciona a la pagina de inicio
            }
        </>
        );
    };

export default Post;