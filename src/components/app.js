import React, { Component } from 'react';
import MyNavbar from './frontpage/myNavbar';



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'Coldient.com',
            items:['Home', 'About', 'Contact','MyProgress', 'Login']
        };
    }

    render() {
    return (
        <div>
            <MyNavbar title={this.state.title} items={this.state.items}/>
        </div>
    );
  }
}
