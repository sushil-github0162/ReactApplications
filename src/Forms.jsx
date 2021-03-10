import React, { useState } from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot_button from 'react-bootstrap/Button';

const Showforms = () =>
{
    const [name,targetname] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (event) =>
    {
        targetname(event.target.value);
    }
    
    const Clickme = (event) => 
    {
        setFullName(name);
    }
    return(
        <div>
        <h1>Hello {fullName}</h1>
        <input type="text"onChange={inputEvent} value = {name}></input>  
        <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>  
      <Button onClick={() => { alert('clicked') }}>Click me</Button>    
        <button onClick = {Clickme}>Click Me 👍<AddAPhotoIcon></AddAPhotoIcon></button>
        <Boot_button>Bootstrap Button</Boot_button>
        </div>
    );
}

export default Showforms;