import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/creators';

class Todo extends Component {
  
    constructor(props){
        super(props);
        const { dispatch } = props;
        this.state = {
            list:[]
        }
        this.boundActions = bindActionCreators(actions, dispatch);
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(list => this.setState({list}))
    }

    renderList = () => {
        return this.state.list.map(item=>{
            return (
                <li key={item.id}>
                    {item.title}
                </li>    
            )
        })
    }

    handlerClick = () => {
        console.log('click');
        let { dispatch } = this.props
        let action = actions.saveTodo([1,2,3])
        dispatch(action)
    }

    render() {
        return (
            <div className="todo">
                {this.renderList()}
                <button onClick={this.handlerClick}>load</button>
            </div>
        );
    }
}

//export default Todo;
export default connect()(Todo)