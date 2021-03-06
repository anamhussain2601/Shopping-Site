import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class Product extends Component {

  render() {
    const { classes, Products } = this.props;
    console.log(Products)
    return (
      <div>
        {Products.map((data) => {
          return (
            <Card className={classes.card} style={{ width: '250px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  // className={classes.media}
                  height="100%"
                  width="100%"
                  image={`products/${data.sku}_2.jpg`}
                />
                <CardContent>
                  <p>
                    {data.title}
                  </p>
                  <p>
                    {data.availableSizes.map((size) => {
                      return `${size} `
                    })}
                  </p>
                  <p>
                    {data.description}
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions style={{display:"flex", justifyContent:"space-between"}}>
                <p >
                  {`${data.price}$`}
                </p>
                <Button size="large" style={{fontSize:'1em',background:'antiquewhite'}}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          )
        })}

      </div>
    )
  }
}
Product.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Product);