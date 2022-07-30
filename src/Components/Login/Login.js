import React from 'react';
 import {Container,Grid,Typography,Card,CardContent,TextField,Button} from "@mui/material";
//import { makeStyles } from '@mui/material';


//  const useStyles = makeStyles((theme)=>({
//     root:{
        
//         // backgroundColor: theme.palette.grey[200],
//         paddingTop:theme.spacing(5),
//     },
// }));

 const Login=()=>{
    // const classes = useStyles();
    return(
        <div classname="form"> 
        <Container >
        <Card Container spacing={6}>    
        <Typography gutterTop variant="h3" align ="center">Login</Typography>
    <Card>
        <CardContent>
            <Grid  container
          spacing={5}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}>
               
                <Grid item xs={12} md={6}>
                    <TextField type="email" label="Email id" placeholder='abc@xyc.com' variant="outlined" required="true" />
                </Grid>
                <Grid item xs={12} md={7} >
                    <TextField type="password" label="Password" placeholder='password' variant="outlined" required="true" />
                </Grid>
                
                <Grid item xs={12} md={6}>
                <Button type="submit" variant="contained" >Submit</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    </Card>
    </Container>
    </div>
       
       
    );
};

export default Login;

