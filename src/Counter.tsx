import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from './store';
import { decrementBy, delayedIncrement, incrementBy } from './store/actions/counter';

interface IAppProps {
  incrementAmount: number;
}

interface IConnectedState {
  count: number;
  pending: boolean;
}

interface IConnectedDispatch {
  increment: () => void;
  decrement: () => void;
  delayedIncrement: () => void;
}

export const AppComponent = (props: IAppProps & IConnectedState & IConnectedDispatch) => (
  <div>
    <h1>Count {props.count}</h1>
    <button className="increment" onClick={props.increment}>
      Increment
    </button>
    <button className="decrement" onClick={props.decrement}>
      Decrement
    </button>
    <button className="delayed-increment" disabled={props.pending} onClick={props.delayedIncrement}>
      Delayed increment
    </button>
  </div>
);

const App: React.ComponentClass<IAppProps> = connect(
  (state: IState, _ownProps: IAppProps): IConnectedState => ({
    count: state.counter.count,
    pending: state.counter.pending,
  }),
  (dispatch: Dispatch<IState>, ownProps: IAppProps): IConnectedDispatch => ({
    decrement: () => dispatch(decrementBy({ amount: ownProps.incrementAmount })),
    delayedIncrement: () => dispatch(delayedIncrement({ amount: ownProps.incrementAmount })),
    increment: () => dispatch(incrementBy({ amount: ownProps.incrementAmount })),
  }),
)(AppComponent);
export default App;
