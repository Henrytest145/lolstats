import { useContext } from "react";
import { Grid2, Paper, Box, Avatar, Typography, ButtonGroup, Button, Divider } from "@mui/material";
import UserContext from "../utilities/globalContext";
import PlayerGames from "../components/Player/PlayerGames";

  const Player = () => {
    
    const userContext = useContext(UserContext);
    if(!userContext) {
      throw new Error('useUser must be used within a UserProvider');
    }
    const {user} = userContext;

    if (!user) {
      throw new Error('User must be defined');
    }

    console.log('User: ', user);
    
    
    return (
      <Paper elevation={9}>
      <Grid2 container sx={{width:'100%', height:"auto"}}>
        <Grid2 size={12} sx={{position:'relative', backgroundColor: 'green'}}>
          <Box
          component={'img'}
          src= "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_45.jpg"
          alt="Fondo de perfil"
          sx={{width:'100%', height:'20rem', objectFit:"cover", filter:'brightness(60%)'}}
          ></Box>
          <Box
          sx={{
            position: 'absolute',
            top: '66%',
            left: '9%',            
            width: '6rem',   // Tamaño mayor que el Avatar
            height: '6rem',  // Tamaño mayor que el Avatar
            borderRadius: '50%',  // Forma circular            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
          <Avatar
          alt={`${user.gameName}+${user.tagName}`}
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/profileicon/${user.profileIconId}.png`}
          sx={{width:'6rem', height:'6rem', zIndex:10}}          
          />
          <Box
          component={"img"}
          src="/Ranked Emblems Latest/Wings/Master.png"
          sx={{width:'18rem', height:'20rem', zIndex:12, position:'absolute',  bottom:'-80%'}}
          />    
          </Box>
          <Box
          sx={{width:'35rem',display:'flex', height:'8rem', position:'absolute', top:'51%', left:'28%'}}
          >
            <Box sx={{height:'100%',display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
              <Box display={"flex"} gap={"0.4rem"}>
                <Typography variant="h2" color="white" sx={{fontSize:'2rem'}}>{user.gameName}</Typography>
                <Typography variant="h2" color="gray" sx={{fontSize:'2rem'}}>{`#${user.tagName}`}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="white">{`Level - ${user.summonerLevel}`}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 container size={12} sx={{backgroundColor: 'rgb(1,1,1,0.4)', height:'auto', marginTop:'2rem'}}>
          <Grid2 size={8} sx={{ height: '14rem', backgroundColor: 'orange', alignItems:'center', justifyContent:'center', display:'flex'}}>
            <Box sx={{width: '37rem', height: '12rem', backgroundColor:'gray', display:'flex', flexDirection:'column'}}>
              <ButtonGroup variant="text" color="primary" aria-label="">
                <Button>All</Button>
                <Button>Soloqueue</Button>
                <Button>Flex</Button>
                <Button>Normal</Button>
                <Button>Aram</Button>
                <Button>Arena</Button>                
              </ButtonGroup>
              <Divider></Divider>
              <Box sx={{width: '37rem', height: '10rem', backgroundColor:'white', display:'flex', flexDirection:'column'}}>

              </Box>
            </Box>
          </Grid2>
          <Grid2 size={4} sx={{backgroundColor: 'purple' , height: '14rem'}}>

          </Grid2>
          <Grid2 size={8} sx={{backgroundColor: 'red', height: '20rem'}}>
            <PlayerGames></PlayerGames>
          </Grid2>
          <Grid2 size={4} sx={{backgroundColor: 'blue', height: '20rem'}}>

          </Grid2>
        </Grid2>
      </Grid2>
      </Paper>
    );
  };
  
  export default Player;
  