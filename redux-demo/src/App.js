import React from 'react';
import Parent from './components/parent'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as counterActions from './reducers/action'


// connect 作用是 帮我们将react组件关联起来
class App extends React.Component {
  onAdd() {
    this.props.dispatch({type: 'add'})
  }

  onJian() {
    this.props.dispatch({type: 'jian'})
  }

  render(){
    console.log(this.props,'props');
    // const {add, jian} = this.props;
    return (
      <div className="App">
        {/* <Parent /> */}
        <div>
          {this.props.counter}
        </div>
        <div>
          {/* <button onClick={this.onAdd.bind(this)}> +  </button>
          <button onClick={this.onJian.bind(this)}> -  </button> */}
          {/* <button onClick={()=>(add())}> +  </button>
          <button onClick={()=>(jian())}> -  </button> */}
            <button onClick={()=>this.props.counterActions.add()}> +  </button>
            <button onClick={()=>this.props.counterActions.jian()}> -  </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: ()=> {dispatch(add())},
//     jian: ()=> {dispatch(jian())},
//   }
// }


const mapDispatchToProps = (dispatch) => {
  return {
    // add: ()=> {dispatch(add())},
    // jian: ()=> {dispatch(jian())},
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
