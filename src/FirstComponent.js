import React, { Component } from "react";

class FirstComponents extends Component{
    render() {
        // console.log(this.props);
        const { name, age } = this.props;
        return(
            <div className="first-component">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>University: Sabaragamuwa University</div>
            </div>
        ); 
    }
}

export default FirstComponents;