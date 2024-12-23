import { TextField, Grid2, Paper, Select, MenuItem, InputLabel, FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  server: string;
  setServer: (value: string) => void;
}

const Home = ({ inputValue, setInputValue, server, setServer }: HomeProps) => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const handleServerSelect = (event: SelectChangeEvent<string>) => {
    setServer(event.target.value);
    setError('');
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!server) {
        setError('Por favor, selecciona un servidor');
        return;
      }
      
      console.log(`Input value: ${inputValue}`);
      
      try {
        console.log('Iniciando fetch...');
        const parts = inputValue.split('#');
        if (parts.length < 2) {
          console.log('Formato inválido');
          return;
        }
        const username = parts[0];
        const tagName = parts[1];
        console.log(username, tagName);
        
        const response = await fetch(`http://localhost:3000/api/player/${username}/${tagName}/${server}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          
          navigate('/Player',{state:{fetchData:data.data}});
          return
        } else {
          console.log('Error al consumir la API', response.status);
          return
        }
        
      } catch (error) {
        console.log(`Error del fetch: ${error}`);
        return
      }
    }
  };

  return (
    <Grid2 container sx={{ width: '100%', height: 'auto', backgroundColor: 'red' }}>
      <Grid2 size={12} sx={{ height: '200rem', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ padding: 2, textAlign: 'center', width: '100%' }}>
          <TextField
            id="username"
            label="Username + Tagname"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            sx={{ width: '30rem' }}
            autoComplete="none"
            error={!!error} // Aplica estilo de error si hay un mensaje de error
          />
          <FormControl sx={{ width: '6rem' }} error={!!error}>
            <InputLabel id="server">Server</InputLabel>
            <Select
              labelId="server"
              id="server-select"
              value={server}
              label="Server"
              onChange={handleServerSelect}
            >
              <MenuItem value="la1">LAN</MenuItem>
              <MenuItem value="la2">LAS</MenuItem>
              <MenuItem value="na1">NA</MenuItem>
              <MenuItem value="kr">KR</MenuItem>
              <MenuItem value="vn">VN</MenuItem>
              <MenuItem value="TW">TW</MenuItem>
              <MenuItem value="JP">JP</MenuItem>
              <MenuItem value="PH">PH</MenuItem>
            </Select>
            {error && <FormHelperText>{error}</FormHelperText>} {/* Mostrar mensaje de error si es necesario */}
          </FormControl>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Home;
