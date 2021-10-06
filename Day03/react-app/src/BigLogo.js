import React from "react";

import bigLogo from "./assets/bigLogo.svg"
import blue from "./assets/LogoIcon/blue.svg"
import circle from "./assets/LogoIcon/circle.svg"

const icons = [blue, circle]

export class BigLogo extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 0,
            start: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.timer = null;
    }
    handleMouseEnter() {
        console.log("0000")
        this.timer = setInterval(() => this.setState({
            current: (this.state.current + 1) % icons.length
        }), 100);
    }
    handleMouseLeave() {
        clearInterval(this.timer)
    }
    render() {
        // let Icon = icons[this.state.current]
        return (
            <div className="home-card-logo">
                <img alt="logo" src={bigLogo}></img>
                <div className="home-card-logo-icon" 
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <img className="icon-content" alt="icon" src={icons[this.state.current]}/>
                </div>
                {this.state.current}
            </div>
        )
    }
}