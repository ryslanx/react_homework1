import React, {Component} from 'react';
import Users from "./components/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import User from "./components/User";

class App extends Component {

    inputMain = React.createRef()

    state = {error : "", user: null, inputValue : ""}

    onSubmitFunc = (ev) => {
        let inputValue = this.inputMain.current.value
        console.log(inputValue, "onsubmit")
        if (inputValue > 0 && inputValue < 11) {
            this.onCorrectInput(inputValue)
        } else {
            this.setState({error: "The index is incorrect. Please enter the index bigger than 0 and lower than 11", user: null})
        }
    }

    onInputFill = () => {
        this.setState({inputValue: this.inputMain.current.value})
    }

    onCorrectInput = (inputValue) => {
        console.log(inputValue)
        fetch('https://jsonplaceholder.typicode.com/users/' + inputValue)
            .then(value => value.json())
            .then(user => this.setState({user, error: ""}))
    }

    render() {
        let {error, user} = this.state
        return (
            <Router>
                <div>
                    <form>
                        <input ref={this.inputMain} type={"number"} onInput={this.onInputFill} value={this.state.inputValue}  />
                        <Link to={"/user"}>
                            <input onClick={this.onSubmitFunc} type="submit" />
                        </Link>
                        <div>{error}</div>
                    </form>
                    <Route path={"/user"} render={() => <User user={user} />} />
                </div>
            </Router>
        );
    }
}

export default App;