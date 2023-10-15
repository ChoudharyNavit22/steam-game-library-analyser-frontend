import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

export const UserProfileCard = (props) => {
    const openSteamProfile = () => {
        window.open(props.data.profileurl, '_blank')
    };
  return (
    <Box sx={{ mb: 4 }}>
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                    component="img"
                    sx={{ width: 200, height: 200 }}
                    src={props.data.avatarfull}
                    title="user avatar"
                />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {props.data.personaname}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Steam Id: {props.data.steamid}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={openSteamProfile}>Steam Profile</Button>
                </CardActions>
            </Box>
        </Card>
    </Box>
  );
};

UserProfileCard.propTypes = {
  data: PropTypes.any
};