import { useState } from "react";


const HocData = () => {
    const [Open, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!Open);
    };

    return (
        <>
            <h2>This is High Order Component</h2>
            <button onClick={toggleOpen}>Click Me</button>
            {Open && <div style={{color:"blue",fontWeight:"500px",textShadow:"3px 2px 5px red"}}>Hello I am From HOC-Data</div>}
        </>
    );
}

export default HocData;