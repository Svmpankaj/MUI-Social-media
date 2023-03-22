import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (
    <div >
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color='secondary'
        size='small'
      >
        Contained
      </Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color='success'
        size='small'
      >
        Contained
      </Button>

      <Button variant="outlined" disabled>Outlined</Button>
    </div>
  );
}

export default App;

