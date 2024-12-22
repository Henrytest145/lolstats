import { TextField, Grid2, Paper, Select, MenuItem, InputLabel, FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import detectRegion from '../utilities/detectRegion';

interface HomeProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  server: string;
  setServer: (value: string) => void;
}

const Home = ({ inputValue, setInputValue, server, setServer }: HomeProps) => {
  const [error, setError] = useState<string>(''); // Estado de error para la validación del servidor
  
  // Manejo del cambio en el input de texto
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Manejo de la selección del servidor
  const handleServerSelect = (event: SelectChangeEvent<string>) => {
    setServer(event.target.value);
    setError(''); // Limpiar el error cuando se selecciona un servidor
  };

  // Manejo de la tecla 'Enter' en el input de texto
  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!server) {
        setError('Por favor, selecciona un servidor');
        return; // Si no se selecciona un servidor, no ejecutar el fetch
      }
      
      console.log(`Input value: ${inputValue}`);
      const region = detectRegion(server); // Obtener la región a partir del servidor
      
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
        console.log(region);
        
        const response = await fetch(`https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagName}?api_key=${process.env.REACT_APP_RIOT_KEY}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Aquí puedes ver el mensaje de respuesta de la API
        } else {
          console.log('Error al consumir la API', response.status);
        }

        console.log('Fetch terminado');
        
      } catch (error) {
        console.log(`Error del fetch: ${error}`);
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
              <MenuItem value="LAN">LAN</MenuItem>
              <MenuItem value="LAS">LAS</MenuItem>
              <MenuItem value="BR">BR</MenuItem>
              <MenuItem value="KR">KR</MenuItem>
              <MenuItem value="CH">CH</MenuItem>
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
