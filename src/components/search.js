import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './header.css';

const SearchBox = () => {
  return (
    <Stack>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={categories.map((option) => option.title)}
        renderInput={(params) => (
          <TextField 
          sx={{width:326}}
            {...params}
            label="Search"
            InputProps={{
                style: {
                    width:'300px'
                },
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}



const categories = [
  { title: '40-75% off Clearance'},
  { title: 'New Arrivals'},
  { title: 'Furniture'},
  { title: 'Bar & Counter Stools'},
  { title: 'Wall Art'},
  { title: "Rugs & Drapery"},
  { title: 'Nightstands & Dressers'},
  { title: 'Coffee & Accent Tables'},
  { title: 'Decor & More'},
  { title: 'Dining Chairs'},
];

export default SearchBox;