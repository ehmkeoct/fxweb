import React from 'react';
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';

export default function TopBar() {
  return(
    <div className="App-header">
        <div className ="header-content">
        <Stack spacing={2} direction="row"marginLeft="20px">
      <p>
        FX Web
      </p>
      <Button
        variant="text"
        target="_blank"
        href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview">
        Ampllify
      </Button>
      <Button
        variant="text"
        target="_blank"
        href="https://github.com/ehmkeoct/fxweb">
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