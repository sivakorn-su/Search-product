import './CSS/Item.css'
function Item(props){
    return(
        <div className="box-item">
            {props.children}
        </div>
    );
}
export default Item