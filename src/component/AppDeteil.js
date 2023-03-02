import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import Item from './Item';
import './CSS/Item.css'
function AppDeteil(props) {
    const { deteil } = props
    const dis = deteil.price * (deteil.discountPercentage / 100)
    const total = deteil.price - dis
    console.log(deteil.rating)
    
    return (
        <div className='detail'>
            <Item>
                <div className='detail-container'>
                    <h2>{deteil.title}</h2>
                    <h3>{deteil.brand}</h3>
                    <Rating name="half-rating-read" defaultValue={deteil.rating} precision={0.5} readOnly />
                    <p>Price : {total.toFixed(2)}  </p>
                    <p style={{color: "red"}}> Discount : {deteil.discountPercentage} %</p>
                    <p style={{color: "gray"}}>From : {deteil.price} </p>
                    <p>Stock : {deteil.stock}</p>
                    <p>Category : {deteil.category}</p>
                    <p>Description : {deteil.description}</p>
                </div>
            </Item>
        </div>


    )
}
export default AppDeteil