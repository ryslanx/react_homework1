import React, {Component} from 'react';
import logo from "../../logo512.png";

class Home extends Component {
    render() {
        return (
            <div>
                <div className={"react-title"}>React</div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default Home;