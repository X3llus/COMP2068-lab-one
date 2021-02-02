import Greeting from './component/greeting';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';


function App() {
  const [name, setName] = useState("");
  
  return (
    <>
      <Box
        display="flex"
        height="90vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <div>
          <TextField
              fullWidth="10vw"
              onChange={({target: {value}}) => setName(value)}
              label="Enter your name"
            />
        </div>
        <Greeting name={name}/>
        
      </Box>
    </>
  );
}

export default App;
