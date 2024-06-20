import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Dashboard from '../../components/Dashboard/Dashboard'
import { Code, Launch, ChatBubbleOutline, GitHub } from "@mui/icons-material";
export default function TopBar() {
  return(
    <div className="App-header">
        <div className ="header-content">
        <Stack spacing={2} direction="row"marginLeft="20px">
        <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
      
      
      <p>
        FX Web
      </p>
      <Button
        variant="text"
        target="_blank"
        href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview"
        endIcon={<Launch />}>
        Amplify
      </Button>
      <Button
        variant="text"
        target="_blank"
        href="https://github.com/ehmkeoct/fxweb"
        endIcon={<GitHub />}>
        Project GitHub
      </Button>
      <Button
        variant="text">
        Log in
      </Button>
    </Stack>
</div>
</div>
  );
}