import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const divideHandler = () => {
    dispatch(counterActions.divide());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div><div className={classes.value}>{counter}</div> <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={increaseHandler}>x10</button>
      <button onClick={divideHandler}>√</button> </div>}
      
      <div>
        <button onClick={toggleCounterHandler}>{show ? '⇡' : '⇣' }</button>
      </div>
      
    </main>
  );
};

export default Counter;
