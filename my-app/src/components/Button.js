 const Button = ({color, text, onClick}) => {

    return (
        <button
        className='btn'>{text}
        style = {{backgroundColor: color}}
        onClick = {onClick} 

     
        </button>
    )
}


export default Button;
