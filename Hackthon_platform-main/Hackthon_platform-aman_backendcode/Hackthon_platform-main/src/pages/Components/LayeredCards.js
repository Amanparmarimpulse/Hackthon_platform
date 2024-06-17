import * as React from 'react';
import { Box, Card, Typography, Container, CardContent ,Grid } from '@mui/material';

const arr = [1, 2, 3];

export default function LayeredCards() {
  return (
   <Grid container  spacing={3} sx={{marginTop:'3%',paddingBottom:'3%',marginLeft:'3%'
   }} >
      {arr.map((item, index) => (
        <Grid item xs={12} sm={8} md={6} lg={4}  key={index}>
        <Box
          key={index}
          sx={{
            perspective: '1000px',
            transition: 'transform 0.4s',
            '& > div, & > div > div': {
              transition: 'inherit',
            },
            '&:hover': {
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            },
          }}
        >
          <Card
            sx={{
              minHeight: '280px',
              width: 320,
              backgroundColor: 'lightblue',
              borderColor: '#000',
            }}
          >
            <Typography variant="body1" fontSize="lg" color="textPrimary">
              Card
            </Typography>
            <Container
              sx={{
                background: 'white',
                backdropFilter: 'blur(1px)',
              }}
            >
              <Typography variant="body1" fontSize="lg" color="textSecondary">
                Card Cover
              </Typography>
            </Container>
            <CardContent
              sx={{
                alignItems: 'self-end',
                justifyContent: 'flex-end',
                background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
                backdropFilter: 'blur(1px)',
              }}
            >
              <Typography variant="body1" fontSize="lg" color="textSecondary" m={2}>
                Card Content
              </Typography>
            </CardContent>
          </Card>
        </Box>
        </Grid>
      ))}
   </Grid>
  );
}
