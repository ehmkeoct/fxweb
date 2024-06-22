import Button from "@mui/material/Button"
import Dashboard from '../../components/Dashboard/Dashboard'

export default function Login() {
  return(
    <Button
    variant="outlined"
      onClick={() => Dashboard()}>Log in</Button>
  );
}