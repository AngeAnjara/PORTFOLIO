
import { Link } from 'react-router-dom'
import { Typography,Grid,Slider, Container } from '@mui/material';
import { useState } from 'react';

const dates = [
    { date: '2015', name: 'Baccalaureat' },
    { date: '2017', name: 'Certificat de fin de formation en Image(E-media)' },
    { date: '2019', name: 'Diplôme de Technicien Supérieur en Multimedia(E-media) "Assistant Réalisateur"' },
    { date: '2020', name: 'Photographe et Designer Chez FastCom' },
    { date: '2021', name: 'Designer Chez Rapid Express' },
    { date: '2021', name: 'Autodidacte Web Designer' },
    { date: '2022', name: 'Cadreur et Monteur Chez Takamoo' },
    { date: '2023', name: 'Autodidacte en Web FullStack (MERN)' },
   
  ];

const Parcours = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
   <Container>
      <Typography variant="h5" sx={{mb:5}}>Mon Parcours:</Typography>
      <Slider
        value={value}
        min={0}
        max={dates.length - 1}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={(index) => dates[index].date}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
          <Typography variant="h5">{dates[value].name}</Typography>
        </Grid>
      </Grid>
      <div className="voirPlus">
            <Link to="/Apropos" className='Lnk'>En Savoir Plus?</Link>
        </div>
   </Container>
  
  )
}

export default Parcours