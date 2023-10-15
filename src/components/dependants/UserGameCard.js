import { Box, Card, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const UserGameCard = (props) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Card>
        <Grid container spacing={{ xs: 2, }} sx={{ p: 4, backgroundColor: props.bgColor }}>
          <Grid item xs={12}>
            <Typography variant="h4" color={props.textColor} fontWeight={500} letterSpacing={2}>
              {props.data.gameName}
            </Typography>
            <Typography sx={{ mb: 2 }} color={props.textColor}>appid: {props.data.appid}</Typography>
            <Typography sx={{ mb: 2 }} color={props.textColor}>Achievements: {props.data.unlockedAchievements}/{props.data.totalAchievements}</Typography>
            <Typography sx={{ mb: 2 }} color={props.textColor}>Play Time: {props.data.playtime_forever} Hrs</Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

UserGameCard.propTypes = {
  data: PropTypes.any
};