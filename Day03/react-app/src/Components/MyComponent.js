
import { Component } from "react";

class MyComponent extends Component {
    
    render() {
        let theme = this.context;
        console.log(theme);
        return(
            // <div style={{background: "red"}}>
            <div style={{background: theme.background}}>
                hellohmt!
            </div>
        )
    }
}

export default MyComponent