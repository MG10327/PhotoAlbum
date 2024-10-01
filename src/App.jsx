import React from 'react'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Button, Toolbar, Container, Grid2} from '@mui/material'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
import { Grid } from '@material-ui/core'


const App = () => {
  const classes = useStyles()

  const cards = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'/>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm" style={{marginTop: '100px' }}>
              <Typography variant='h2' align="center" color='textPrimary' gutterBottom >
                Photo Album
              </Typography>
              <Typography variant="h5" align='center' color='textSecondary' gutterBottom  >
                Hello everyone this is a photo album and I'm making this sentence as long as possible to see how it looks on the screen.
              </Typography>
              <div className={classes.buttons}>
                <Grid2 container spacing={2} justifyContent="center">
                  <Grid2 item>
                    <Button variant="contained"> See my photos</Button>
                  </Grid2>
                  <Grid2 item>
                    <Button variant="outlined"> Secondary Action</Button>
                  </Grid2>
                </Grid2>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid2 container spacing={4}>
              {cards.map((card)=> (
                <Grid2 item key={card} size={{xs: 12, sm: 6, md: 4}}>
                  <Card className={classes.card}>
                    <CardMedia
                    className={classes.cardMedia}
                    image="../assets/water.jpg"
                    title="Image title"
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant='h5'>Heading</Typography>
                      <Typography> This is a media card. You can use this section to describe the content</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color="primary">View</Button>
                      <Button size='small' color="secondary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
            </Container>
        </main>
        <footer className={classes.footer}>
              <Typography variant='h6' alignItems="center" gutterBottom>Footer</Typography>
              <Typography variant="subtitle1" alignItems='center' color="textSecondary">Something here to give the footer a purpose.</Typography>
        </footer>
    </>
  )
}

export default App