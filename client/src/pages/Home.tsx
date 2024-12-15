import { TextField, Grid2, Paper } from '@mui/material';
import { ChangeEvent, KeyboardEvent } from 'react';

interface HomeProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Home = ({ inputValue, setInputValue }: HomeProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(`Input value: ${inputValue}`);
 
      try {
        console.log('iniciando fetch');
        
        const response = await fetch('http://localhost:3000/test', {
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
        
        console.log('final fetch dos');
        
      } catch (error) {
        console.log(`Error del fetch ${error}`);
        
      }

    }
  };

  return (
    <Grid2 container sx={{ width: '100%', height: 'auto', backgroundColor: 'red' }}>
      <Grid2 size={12} sx={{ height: '200rem', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ padding: 2, textAlign: 'center', width: '100%' }}>
          <TextField
            id="username"
            label="username + #"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            sx={{width:'30rem'}}
            autoComplete='none'
          />
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Home;
