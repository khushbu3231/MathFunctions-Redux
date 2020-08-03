import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayCounter from '../Components/DisplayCounter/DisplayCounter';
import ChangeCounter from '../Components/ChangeCounter/ChangeCounter';
import * as actionCreators from '../store/actions/actions';


class MainPage extends Component {

    render() {
        return (
            <div>
                <DisplayCounter value={this.props.ctr} />
                <ChangeCounter label="Increment" click={this.props.onIncrementCounter}/>
                <ChangeCounter label="Decrement" click={this.props.onDecrementCounter} />
                <ChangeCounter label="Addition" click={this.props.onAddCounter} />
                <ChangeCounter label="Subtract" click={this.props.onSubtractCounter} />
               
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map((storeResult,index)=>{
                            return(
                                <li key={index} onClick={()=>this.props.onDeteleResult(index)}>
                                    {storeResult}
                                    
                                </li>
                            )
                        })                        
                    }                    
                </ul>
            </div>
        )}
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults:state.res.results
    }
}

const mapDispatchToProps= dispatch=>{
    return{
        onIncrementCounter:()=>dispatch(actionCreators.increment()),
        onDecrementCounter:()=>dispatch(actionCreators.decrement()),
        onAddCounter:()=>dispatch(actionCreators.add()),
        onSubtractCounter:()=>dispatch(actionCreators.subtract()),
        onStoreResult:(result)=>dispatch(actionCreators.storeResult(result)),
        onDeteleResult:(index)=>dispatch(actionCreators.deleteResult(index))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)