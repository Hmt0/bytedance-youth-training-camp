import React from "react";

import bigLogo from "./assets/bigLogo.svg"
import blue from "./assets/LogoIcon/blue.svg"
import circle from "./assets/LogoIcon/circle.svg"

const icons = [blue]

export class BigLogo extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         current: 0
    //     }
    //     setInterval(() => this.setState({
    //         current: 0
    //     }), 1000);
    // }
    render() {
        // let Icon = icons[this.state.current]
        return (
            <div className="home-card-logo">
                <img alt="logo" src={bigLogo}></img>
                <div className="home-card-logo-icon">
                    <img className="icon-content" alt="icon" src={icons[0]}/>
                </div>
            </div>
        )
    }
}