import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);

        this.state ={
            title: 'Searched Keywords' ,
            keywords: ''

        }
        console.log(props)

    }

    inputChange(event){

        this.setState({keywords: event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo" 
                onClick= {()=>console.log('clicked')}
                > News Search</div>
                <input 
                onChange= {this.inputChange.bind(this)} />
                <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
            </header>
        )
    }
}
export default Header;