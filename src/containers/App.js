import {connect} from "react-redux";
import React,{Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

import "./App.css";
import Scroll from "../components/Scroll";
import {setSearchField} from "../actions";

const mapStateToProps = state=>{
  return{
    searchField: state.searchField
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange: (event)=>dispatch(setSearchField(event.target.value))
    }
  }
class App extends React.Component{
   constructor(){
    super();
    this.state={robots:[]};
    }
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
          return response.json();
      }).then(users=>{this.setState({robots:users})});

    }

    render(){
      const {robots} = this.state;
      const {searchField,onSearchChange} = this.props;
      const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return(
        <div className="tc">
          <h1 className="f2 f1-ns">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
                    <CardList robots={filteredRobots}/>
          </Scroll>

        </div>
      );
    }





}
export default connect(mapStateToProps,mapDispatchToProps)(App);
