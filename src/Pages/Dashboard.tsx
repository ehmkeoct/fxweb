import React from 'react';
import Button from "@mui/material/Button"
import TopBar from '../components/TopBar/TopBar'
import Stack from '@mui/material/Stack';
import { Launch, ChatBubbleOutline, GitHub, AddToPhotos } from "@mui/icons-material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

export default function Dashboard() {
  return(
      <div className="App-body" >
        <br/><br/> 
        <Stack spacing={2}
        direction="row"
        marginLeft="10px"
        sx={{ color: '#61dafb', display: 'block' }}>
        <p>External Links</p>
        <br/>
        <Button
        variant="outlined"
        target="_blank"
        sx={{ color: '#61dafb'}}
        href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview"
        endIcon={<Launch />}>
        Amplify
      </Button>
      <Button
        variant="outlined"
        target="_blank"
        sx={{ color: '#61dafb'}}
        href="https://github.com/ehmkeoct/fxweb"
        endIcon={<GitHub />}>
        Project GitHub
      </Button>
      <Button
        variant="outlined"
        target="_blank"
        sx={{ color: '#61dafb'}}
        href="https://mui.com/material-ui/material-icons/"
        endIcon={<AddPhotoAlternateOutlinedIcon />}>
        MUI Icons
      </Button>
      <Button
        variant="outlined"
        target="_blank"
        sx={{ color: '#61dafb'}}
        href="https://mui.com/material-ui/all-components/"
        endIcon={<AddToPhotos />}>
        
        MUI Components
      </Button>
      <Button
        sx={{ color: '#61dafb'}}
        variant="outlined"
        target="_blank"
        href="https://docs.google.com/document/d/1vz_G-1d9GsbOT2399IGgQ0AQPzIruA4rvICJb8uFDPg/edit?usp=sharing"
        endIcon={<ChatBubbleOutline />}>
        Document
      </Button>
      <Button
        sx={{ color: '#61dafb'}}
        variant="outlined"
        target="_blank"
        href="https://monorepo.tools/"
        endIcon={<AccountTreeOutlinedIcon/>}>
        Monorepo
      </Button>
      <Button
        sx={{ color: '#61dafb'}}
        variant="outlined"
        target="_blank"
        href="https://colorable.jxnblk.com/"
        endIcon={<FormatColorFillIcon/>}>
        Colorable
      </Button>
      </Stack>
      <Stack spacing={2}
        direction="row"
        marginLeft="10px"
        sx={{ color: '#61dafb', display: 'block' }}>
        <br/><br/><p>Internal Routes</p><br />
      <Button
        sx={{ color: '#61dafb'}}
        variant="outlined">
        Log in
      </Button>
      <Button
        sx={{ color: '#61dafb'}}
        variant="outlined">
        Settings
      </Button>
    </Stack>
      </div>
  );
}