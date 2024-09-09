import { Box, Button, styled } from "@mui/material"
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
    padding: '20px 40px'
  }
}))

const Image = styled('img')({
  padding: '15px ',
  

});  

const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
    [theme.breakpoints.down('lg')]: {
      width:'46%'
  },
  [theme.breakpoints.down('sm')]: {
    width:'48%'
}
`;

const Anchor = styled('a')({
  textDecoration: "none",
  alignItems: "center"
})


const ActionItem = ({ product }) => {
  const url = "http://127.0.0.1:5000";

  const[quantity , setQuantity]=useState(1);
  const {id} = product;
  const  navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () =>{
    dispatch(addToCart(id , quantity))
    navigate('/cart');

  }

  return (
    <LeftContainer>
      <Box style={{
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '90%',
        marginBottom: '15px',
        marginRight: '15px'
      }}>
        <Image src={product.detailUrl} alt="detail" style={{width:'80%'}}/>
      </Box>

      <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}> <Cart />Add to Cart  </StyledButton>
      <StyledButton variant="contained" style={{ background: '#fb541b' }}> <Flash />  Buy now</StyledButton>
      <Anchor href={url} ><StyledButton variant="contained" style={{ marginTop: 10, background: 'green' }}>  Try on </StyledButton> </Anchor>
    </LeftContainer>
  )
}

export default ActionItem
