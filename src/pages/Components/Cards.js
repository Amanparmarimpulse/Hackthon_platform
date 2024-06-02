import { Container ,Card,Typography,CardActions,CardContent,Button,CardMedia, Grid} from '@mui/material'
import React from 'react'
const arr=[1,2,3,4,6,7,8,9,10]
function Cards() {
    
  return (
    <>
    <Container sx={{marginTop:'10%'}}>
        <Grid container spacing={4}>
       { arr.map((cards)=>{
      return <Grid item> <Card sx={{ maxWidth: 345 }} key={cards} xs={12} md={6}lg={4}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Grid>
       })}
    </Grid>
        </Container></>
  )
}

export default Cards