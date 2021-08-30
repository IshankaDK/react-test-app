import logo from './logo.svg';
import React from "react"
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyle = makeStyles({
  btn: {
    background: 'linear-gradient(45deg, #FF8E53 ,#FF6BBB)',
    border: 0,
    marginBottom: 10,
    borderRadius: 15,
    color: 'white',
    padding: '5px 25px'
  }
})

function StyledButton() {
  const styl = useStyle()
  return <Button className={styl.btn}>STYLED BUTTON TEST</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => {
              setChecked(e.target.checked)
            }}
            inputProps={{
              'aria-label': 'primary checkbox'
            }}
          />
        }
        label="Testing CheckBox"
      />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledButton/>
        <TextField
          variant="outlined"
          color='secondary'
          type='email'
          label=" The email"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />


      </header>
    </div>
  );
}

export default App;
