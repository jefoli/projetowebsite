
import './styles.css';

export const Button = ({text, onClick, disabled}) => {
    return (
        <div className='button-container'>
            <button onClick={onClick} className="button" disabled={disabled}>
                {text}
            </button> 
        </div>
  
    )
}