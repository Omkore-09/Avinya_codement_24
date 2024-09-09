import { Grid, styled } from "@mui/material";

import { imageURL } from '../../constants/data';

const Wrapper = styled(Grid)`
    margin-top: 10px ;
    justify-content: space-between;
`
const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image =>
                        <Grid item lg={4} sm={4} md={12} xs={12} >
                            <img src={image} alt="myimg" style={{ width: '100%' }} />
                        </Grid>
                    )
                }
            </Wrapper >
            <Image src={url} alt="covid" />
        </>   
    )
}

export default MidSection;
