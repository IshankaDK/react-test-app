import logo from './logo.svg';
import React, { useState, useEffect } from "react"
import './App.css';
// import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

// const useStyle = makeStyles({
//   btn: {
//     background: 'linear-gradient(45deg, #FF8E53 ,#FF6BBB)',
//     border: 0,
//     marginBottom: 10,
//     borderRadius: 15,
//     color: 'white',
//     padding: '5px 25px'
//   }
// })

// function StyledButton() {
//   const styl = useStyle()
//   return <Button className={styl.btn}>STYLED BUTTON TEST</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = React.useState(true)
//   return (
//     <div>
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checked}
//             icon={<DeleteIcon />}
//             checkedIcon={<SaveIcon />}
//             onChange={(e) => {
//               setChecked(e.target.checked)
//             }}
//             inputProps={{
//               'aria-label': 'primary checkbox'
//             }}
//           />
//         }
//         label="Testing CheckBox"
//       />
//     </div>
//   )
// }


function App() {

  // console.log('render');
  const [resourceType, setResourceType] = useState('posts')
  const [items,setItems] =useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    // console.log("on mount");
  }, [resourceType])
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>

      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
