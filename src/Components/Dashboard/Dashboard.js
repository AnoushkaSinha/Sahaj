
import React from 'react';
import {Container,Grid,Typography,Card,CardContent,CardActionArea,CardMedia,Button} from "@mui/material";
//import { makeStyles } from '@mui/material';


//  const useStyles = makeStyles((theme)=>({
//     root:{
       
//         // backgroundColor: theme.palette.grey[200],
//         paddingTop:theme.spacing(5),
//     },
// }));

const Dashboard=()=>{
   // const classes = useStyles();
   return(
       
      
       <Container >
           <Typography color="textPrimary" gutterBottom variant="h3" align="center">Classes</Typography>
           <Grid container spacing={5}>
               <Grid item sm={3}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section A</Typography>
                           <Button variant="contained" style={{margin:10}} >Topic Covered</Button>
                           <Button variant="contained" style={{margin:10}}>Schedule</Button>
                           
                       </CardContent>
                      </CardActionArea>
                   </Card>

               </Grid>
               <Grid item sm={3}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section B</Typography>
                           <Button variant="contained" style={{margin:10}} >Topic Covered</Button>
                           <Button variant="contained" style={{margin:10}}>Schedule</Button>
                       </CardContent>
                      </CardActionArea>
                   </Card>

               </Grid>
               
               <Grid item sm={3}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section C</Typography>
                          <Button variant="contained" style={{margin:10}} >Topic Covered</Button>
                          <Button variant="contained" style={{margin:10}}>Schedule</Button>
                       </CardContent>
                      </CardActionArea>
                   </Card>
               </Grid>
               <Grid item sm={3}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section D</Typography>
                           <Button variant="contained" style={{margin:10}} >Topic Covered</Button>
                           <Button variant="contained" style={{margin:10}}>Schedule</Button>
                       </CardContent>
                      </CardActionArea>
                   </Card>
               </Grid>
           </Grid>
       </Container>
       
   );
};

export default  Dashboard;

