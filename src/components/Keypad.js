// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    HandlerKeyUp = () => {
        console.log("Entering password...")
    }


render(){
    return(
        <input type="password" onKeyUp={this.HandlerKeyUp}/>
    )
}
}
export default Keypad