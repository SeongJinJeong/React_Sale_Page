import React, { Component } from 'react'

const Store = React.createContext();

const {Provider,Consumer: StateConsumer} = Store;

class StateProvider extends Component {

    state={
        curPage : "main",
    }

    action ={
        pageChange : (e)=>{
            this.setState({
                curPage : e
            })
        }
    };

    render(){

        const { state,action} = this;
        const value = {state,action}

        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }

}

export {StateProvider,StateConsumer};