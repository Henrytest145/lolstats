import { useLocation } from "react-router-dom";
import { Grid2, Paper, Box, Avatar, Typography } from "@mui/material";
  const Player = () => {
    const location = useLocation();
    const fetchedData = location.state?.fetchData;
    console.log(fetchedData);
    
    return (
      <Paper elevation={9}>
      <Grid2 container sx={{width:'100%', height:"100rem"}}>
        <Grid2 size={12} sx={{position:'relative'}}>
          <Box
          component={'img'}
          src= "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Irelia_45.jpg"
          alt="Fondo de perfil"
          sx={{width:'100%', height:'20rem', objectFit:"cover", filter:'brightness(60%)'}}
          ></Box>         
          <Box
          sx={{
            position: 'absolute',
            top: '13%',
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
          alt={`${fetchedData.gameName}+${fetchedData.tagName}`}
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/profileicon/${fetchedData.profileIconId}.png`}
          sx={{width:'6rem', height:'6rem', zIndex:10}}          
          />
          <Box
          component={"img"}
          src="/Ranked Emblems Latest/Wings/Master.png"
          sx={{width:'18rem', height:'20rem', zIndex:12, position:'absolute',  bottom:'-80%'}}
          />    
          </Box>
          <Box
          sx={{width:'35rem',display:'flex', height:'8rem', position:'absolute', top:'11%', left:'28%'}}
          >
            <Box sx={{height:'100%',display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
              <Box display={"flex"} gap={"0.4rem"}>
                <Typography variant="h2" color="white" sx={{fontSize:'2rem'}}>{fetchedData.gameName}</Typography>
                <Typography variant="h2" color="gray" sx={{fontSize:'2rem'}}>{`#${fetchedData.tagName}`}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="white">{`Level - ${fetchedData.summonerLevel}`}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      </Paper>
    );
  };
  
  export default Player;
  