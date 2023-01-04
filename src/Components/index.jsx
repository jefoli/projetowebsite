import React from "react";

import './styles.css';

//export default function PostCard(){}
//OU
//export const PostCard = (props) => {

//DESSA FORMA, ELE ESTÁ PEGANDO TUDO DE UMA VEZ, CONFORME CONFIGURAMOS NO  App.js.
//export const PostCard = ({post}) => {

//AGORA DE FORMA DESTRUCTION:

export const PostCard = ({title, cover, id, body}) => {

    //Props -> são atributos do jsx que passamos para dentro do componente 
    //se recebermos uma props, ela será um objeto
    //console.log(props);

    //para pegarmos o post que foi recebido pelo props, podemos criar uma const:

    //maneira tradicional:
    //const post = props.post;

    //destructor
    //const { post } = props

    //terceira maneira - diretamente na Arrow function

    // return(
    //     <div className='post'>
    //     <img src={post.cover} alt={post.title} />
    //     {/* // aqui precisamos de um root para renderizar mais de um elemento html, poderia ser um el html ou tag vazia <></> */}
    //     <div className='post-content' key={post.id}> 
    //     <h1 >{post.title}</h1>
    //     <p>{post.body}</p>
    //     </div>
    //     </div>
    // )

    //EXP pegando direto sem post:
    return(
        <div className='post'>
        <img src={cover} alt={title} />
        {/* // aqui precisamos de um root para renderizar mais de um elemento html, poderia ser um el html ou tag vazia <></> */}
        <div className='post-content'> 
        <h2 >{title}</h2>
        <p>{body}</p>
        </div>
        </div>
    )
}


