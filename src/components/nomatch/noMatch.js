import React from "react";
import Purple from "../../../src/components/nomatch/PurpleImg.png"

function noMatch(props){
    return(
        <div>
<h1 className='MessageCenter'>ERROR 404: No Match</h1>
<img className='PurpleImg' src={Purple} alt="Logo" />
</div>
);
}
export default noMatch