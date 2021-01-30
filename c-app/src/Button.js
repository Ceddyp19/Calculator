
function Button(props) {

        return (
        <button className={props.class} id={props.id} onClick={() => props.action(props.num)}>{props.text}</button> 
        );
    
}
 
export default Button;