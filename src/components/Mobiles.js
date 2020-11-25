import React from 'react'
import "./css/Mobiles.css"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Cancel, CheckCircle, ShoppingCart } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
function Mobiles({id, name, desc, price, image,remove}) {
    const [{basket},dispatch]= useStateValue()
    const purchased = ()=>{
        alert("mobile purchased")
    }
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                name:name,
                desc:desc,
                price:price,
                image:image
            }
        })

    }
    const removeFromBasket = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
    return (
        <div className="mobiles">
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="mobiles"
          height="340"
          image={image}
          title="mobiles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  className="button" onClick={purchased}>
          <CheckCircle/>
          ₹{price}
        </Button>
        {
          remove?(
            <Button size="small"  className="button" onClick={removeFromBasket}>
              <Cancel/>
              Remove
            </Button>

          ):(
            <Button size="small" className="button" onClick={addToBasket}>
              <ShoppingCart/>
              Add To Cart
            </Button>

          )
        }
        
       
      </CardActions>
    </Card>
         
    
        </div>
    )
}

export default Mobiles
