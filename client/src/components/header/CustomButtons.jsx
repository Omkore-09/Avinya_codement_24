import { useState , useContext} from "react";

import { Box,  Typography , Button} from "@mui/material";



import { ShoppingCart } from '@mui/icons-material';
import styled from "@emotion/styled";

import { LoginContext , LocationContext } from "../context/DataProvider";


import LoginDailog from "../login/LoginDailog";


// import LoginButtons from "../login/LoginDailog";

///components 


const Wrapper = styled(Box)`
margin: 0 3% 0 auto;
display: flex;
  & > button, & > p , & > div {
    margin-right: 40px ;
    font-size: 16px;
    align-items: center;
    
}
`



const Container = styled(Box)`
    display: flex;
`;


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
  `

const CustomButtons = () => {

    const[open, setOpen]= useState(false);

    const{account}=useContext(LoginContext);
    const openDialog = ()=>{
        setOpen(true);
    }
    
    return (
        <Wrapper>
            
            {
                account ? <Typography>  {account} </Typography> :
                <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>
            }
               
            
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDailog open={open} setOpen={setOpen}/> 
            {/* <Login open={open} setOpen={setOpen}/> */}
            {/* {
                account ? <Typography>  pune </Typography> :
                <LoginButton variant="contained" onClick={()=> openDialog()}>Location</LoginButton>
            }
                */}
        </Wrapper>
    )
}

export default CustomButtons;
