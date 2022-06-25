import {
  Button,
  Input,
} from '@mui/material';

function App() {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      {/* <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button> */}
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          UploAD
        </Button>
      </label>
    </div>
  );
}

export default App;
