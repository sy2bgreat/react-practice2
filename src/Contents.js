import React from 'react';
import { useState } from 'react';

function Contents(){
    const [here, setValue] = useState("");
    const [name, setName] = useState("");

    function setUser(e){
        setValue(e.target.value);
    };

    function UpdateName(e){
    e.preventDefault()
        setName(here);
    }
return(
<form>
<p>Your Name:{name}</p>
    <input type="text" value={here} onChange={setUser} ></input>
    <button onClick={UpdateName}>Save</button>
</form>

);

}

export default Contents;