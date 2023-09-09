import React from "react";

const HOC = (props) => {
    return(
        <>
            <h3 style={{backgroundColor:'lightblue'}}>{<props.value data={'this is from lightblue compo'} />}</h3>
        </>
    )
}

export default HOC; 


function HOCgray(props){
    return(
        <>
            <h3 style={{backgroundColor:'gray'}}>{<props.value data={'this is from gray compo'} />}</h3>
        </>
    )
}

export {HOCgray};

function HOCgreen(props){
    return(
        <>
            <h3 style={{backgroundColor:'lightgreen'}}>{<props.value data={'this is from lightgreen compo'} />}</h3>
        </>
    )
}

export {HOCgreen};
