
import { AppBar, Toolbar, Box,IconButton, Typography,Drawer,List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useState } from 'react';

// import logo from '../../componenets/logo.png'

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background : #2874f0;
    height:55px ;
`;

const Component = styled(Link)`
    margin-left: 12% ;
    line-height : 0;
    text-decoration: none;
    color:inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px ;
    font-style: italic ;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const Haedings = styled(Typography)`
    font-size: 25px ;
    font-style: italic ;
`


const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Header = () => {
    // const logoURL = '../';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }


    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader position='fixed'>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to={'/'}>
                    {/* <img src={logo} alt="logo" style={{ width: 75 }} /> */}
                    <Box>
                        <Haedings  style={{ fontFamily: 'Roboto', fontWeight: 700 }} >AVINYA</Haedings >
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Dive into&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>
                                E-commerce
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;