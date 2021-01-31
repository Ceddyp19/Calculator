
function Button(props) {
//whenever a better is clicked, action prop is activated and we pass the buttons' arithmetic value as parameter  
        return (
        <button className={props.class} id={props.id} onClick={() => props.action(props.text)}>{props.text}</button> 
        );
    
}
 
export default Button;