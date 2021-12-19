import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { auth,createUserWithEmailAndPassword,sendEmailVerification ,db,setDoc,doc,collection,signInWithCredential,firebaseConfig } from "../file.js";
import {setDoc,doc,db} from "../../firebase/Firebase";
const theme = createTheme();

export default function  Branchsigin() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let name=data.get('name')
    let email=data.get('email')
    let password= data.get('password')
  


    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
     
    });
    let obj={
        name,
        email,
        password,
       
    }
    await setDoc(doc(db,"Branch Manger",email),obj)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,  }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              type="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
             
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Send Request
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
            

                </Link>
              </Grid>
        
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}