import { Navbar } from './styled';
import { Link } from "react-router-dom";
import './styled';

export default function Header(){
    
    function handleClick(e) {
        console.log('ola');
    };
    
    return(
        <Navbar>
            <Link to="/">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' height='20' alt='./logo.png' />
                <span>PROJECT</span>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/sobre" onClick={handleClick}>Sobre</Link>
            <Link to="/servicos">Nosos Serviços</Link>
            <Link to="/historia">História</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/post">Posts</Link>
        </Navbar>
    );
}
