import React, { PureComponent } from "react";

class PureCompo extends PureComponent {
    constructor() {
        super();
        this.state = {
            Open: false
        };
    }

    FuncPureCompo = () => {
        this.setState(prevState => ({
            Open: !prevState.close
        }));
    };

    render() {
        console.log('This rendor is call from PureFunction...')
        return (
            <>
                <h2>This is High Order Component</h2>
                <button onClick={this.FuncPureCompo}>Click Me</button>
                {this.state.Open && <div style={{color:"green" ,fontWeight:"500px"}}>Hello This Is From PureFunction Compo</div>}
            </>
        );
    }
}

export default PureCompo;
