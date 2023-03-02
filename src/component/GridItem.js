import { Link } from "react-router-dom"
import Item from "./Item"
import'./CSS/Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function GridItem(props) {
    const { title, price, thumbnail, id, discountPercentage } = props
    const dis = price * (discountPercentage / 100)
    const total = price - dis
    return (
        
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="130"
                        image={thumbnail}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {total.toFixed(2)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`product/${id}`}>Lean more</Link>
                    </Button>
                </CardActions>
            </Card>
        



    )
}
export default GridItem