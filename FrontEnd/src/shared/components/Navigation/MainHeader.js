

import './MainHeader.scss';

import React, { Component } from 'react'

export default class MainHeader extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            navBackground: '#161616'
        }
    }
    
    // componentDidMount() {
    //     if(window.location.href=='http://localhost:3000/'){
    //         document.addEventListener("scroll", () => {
    //             const backgroundcolor = window.scrollY < 100 ? "#ffffff00" : "#161616";
          
    //             this.setState({ navBackground: backgroundcolor ,
    //                           boxShadow:' 0 2px 6px rgb(0 0 0 / 26%)'});
    //           });
    //     }
        
    //   }
    render() {
        return (
            <header className="main-header" style={{backgroundColor:this.state.navBackground}}>

                {this.props.children}
            </header>
        )
    }
}
