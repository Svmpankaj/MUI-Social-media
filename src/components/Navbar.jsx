import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
  display: 'flex', 
  alignItems: 'center', 
  gap: "20px"
}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex', 
  alignItems: 'center', 
  gap: "10px"
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>SVM PANKAJ</Typography>
      <Pets sx={{display: {xs: "block", sm: "none"}}}/>
      <Search><InputBase placeholder='search...'/></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>
        <Avatar 
        sx={{width: 30, height: 30}} 
        src='https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp'/>
      </Icons>
      <UserBox>
      <Avatar 
        sx={{width: 30, height: 30}} 
        src='https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp'/>
        <Typography variant='span'>John</Typography>
      </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
