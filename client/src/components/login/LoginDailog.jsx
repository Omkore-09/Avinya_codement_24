import { Box, Button, Dialog, TextField, Typography , styled } from "@mui/material";

import { authenticateLogin, authenticateSignup } from '../../service/api';

import { useState , useContext } from "react";

import { LoginContext } from "../context/DataProvider";
import Logrev from "../Reward/loginrev";


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 33%;
    height: 85%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    city:''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}




const LoginDailog = ({ open, setOpen }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = () => {
    
        setShowPopup(true);
    
        
        setTimeout(() => {
          setShowPopup(false);
        }, 4000);
    
        
      };

    const[account , toggleAccount] = useState(accountInitialValues.login);
    const[signup , setSignup] = useState(signupInitialValues);

    const{setAccount}=useContext(LoginContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () =>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputchange =(e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () =>{
      let response= await authenticateSignup(signup);
      console.log(response);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
    //   setAccount(signup.city);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Component>
                <Box style={{display: 'flex' , height: '100%'}} >
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}} > {account.subHeading} </Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                        <TextField variant="standard" label="Enter email" />
                        <TextField variant="standard" label="Enter password" />
                        <Text>By continueing you are agrre with T&C</Text>
                        <LoginButton onClick={handleLogin}>Login  </LoginButton>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={()=>toggleSignup()}>New to Avinya? Create New Account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="firstname" label="First Name" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="lastname" label="Last Name" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="username" label="Username" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="email" label="Email" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="password" label="Password" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="phone" label="phone" />
                    <TextField variant="standard" onChange={(e)=> onInputchange(e)} name="city" label="city" />
                    
                    <LoginButton onClick={()=> signupUser()}  >continue</LoginButton>
                    {/* <CreateAccount>New to Avinya? Create New Account</CreateAccount> */}
                </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDailog
