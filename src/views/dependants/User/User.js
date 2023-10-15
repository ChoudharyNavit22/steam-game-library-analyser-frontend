
import { useState, useEffect, useCallback } from 'react';
import { useIsMountedRef } from '../../../helpers/hooks/index';
import { Box, Container, Grid, Typography} from '@mui/material';
import { useParams} from 'react-router-dom';
import { API } from 'helpers';
import { UserProfileCard, UserGameCard, notify } from 'components/index';

export const User = () => {
  const [user, setUser] = useState("");
  const [userGames, setUserGames] = useState([]);
  const [userMostPlayedGame, setUserMostPlayedGame] = useState("");
  const [userGameCount, setUserGameCount] = useState(0);
  const isMounted = useIsMountedRef();
  let { id } = useParams();

  const getUser = useCallback(async () => {
    try {
      const response = await API.getSteamUser(id);
      if (response.success) {
        if (isMounted) {
          console.log(response.data);
          setUser(response.data);
        }
      }
      else {
        setUser("");
        notify('Failed to Fetch User');
      }
    } catch (err) {
      setUser("");
      notify('Failed to Fetch User');
    }

  }, [isMounted,id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const getUserGames = useCallback(async () => {
    try {
      const response = await API.getSteamUserGames(id);
      if (response.success) {
        if (isMounted) {
          console.log(response.data);
          setUserGameCount(response.data.game_count)
          setUserGames(response.data.games);
          setUserMostPlayedGame(response.data.mostPlayedGame);
        }
      }
      else {
        setUserGames([]);
        setUserGameCount(0)
        setUserMostPlayedGame("")
        notify('Failed to Fetch Shops Menu');
      }
    } catch (err) {
      setUserGames([]);
      setUserGameCount(0)
      setUserMostPlayedGame("")
      notify('Failed to Fetch User');
    }

  }, [isMounted,id]);

  useEffect(() => {
    getUserGames();
  }, [getUserGames]);

  const renderMostPlayedGames = () => {
    if (userGameCount != 0)
      return true;
    else
      return false;
  };

let content = (
    <Box sx={{
      backgroundImage:`url('https://www.gameinformer.com/sites/default/files/styles/full/public/2021/12/07/ae8f7cc9/halo-infinite-backside-2.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    }} >
      <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      display: 'flex', flexDirection: 'column',
      minHeight: '100vh'
    }}>
        <Container maxWidth="lg" sx={{
              py: {
                xs: '100px',
                sm: window.screen.availHeight / 50
              }
            }}>
          <Grid container spacing={{ xs: 2, }}>
              <Grid item xs={12} lg={12}>
                <UserProfileCard data={user} title="User Profile Card"></UserProfileCard>
              </Grid>
              <Grid item xs={12} lg={12} alignItems="center" justifyContent="center">
                <Typography sx={{ pb: 3 }} variant="h4" fontWeight={500} letterSpacing={2} align='center' color="common.white">
                    Most Played Game
                </Typography>
                {
                  renderMostPlayedGames() && userMostPlayedGame ? <Grid item xs={12} lg={4}>
                  <UserGameCard data={userMostPlayedGame} title="Most Played Game"></UserGameCard>
                </Grid> : <Typography variant="h6" fontWeight={500} letterSpacing={2} align='center' color="common.white">Please make your Profile Public on Steam to get more Stats</Typography>
                }
              </Grid>
              <Grid item xs={12} lg={12} alignItems="center" justifyContent="center">
                <Typography sx={{ pb: 3 }} variant="h4" fontWeight={500} letterSpacing={2} align='center' color="common.white">
                    All Games
                </Typography>
                <Grid container spacing={{ xs: 2, }}>
                  {
                    renderMostPlayedGames() && userGames.length > 0 ? userGames.map((game, i) => {
                      return (
                        <Grid item xs={12} lg={4} key={i}>
                          <UserGameCard data={game} title="User Games"></UserGameCard>
                        </Grid>
                      );
                    }) : <Grid item xs={12} lg={12} alignItems="center" justifyContent="center"><Typography variant="h6" fontWeight={500} letterSpacing={2} align='center' color="common.white">Please make your Profile Public on Steam to get all games</Typography></Grid>
                  }
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
  return content;
};
