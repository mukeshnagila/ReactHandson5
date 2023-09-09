import './App.css';
import HOC,{HOCgray, HOCgreen} from './Components/HOC';
import HOCData from './Components/HocData';
import PureCompo from './Components/PureCompo';

function App() {
  return (
      <>
                  <h2 className='App'>This IS HOC Component</h2><br/>
              <div className='hoctheory'>
                  <h4>It is also known as HOC. In React, HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. According to the official website, it is not the feature(part) in React API, but a pattern that emerges from React compositional nature. They are similar to JavaScript functions used for adding additional functionalities to the existing component.<br/>
                      A higher order component function accepts another function as an argument. The map function is the best example to understand this. The main goal of this is to decompose the component logic into simpler and smaller functions that can be reused as you need..</h4>
              </div><br/><br/>
              <div className="hoc">
                    <HOC value={HOCData} /><br/>
                    <HOCgray value={HOCData} /><br/>
                    <HOCgreen value={HOCData} />
              </div><br/><br/><br/>

              <h2 className='App'>This IS Pure Component</h2><br/>
              <div className='hoctheory'>
                  <h4>A PureComponent is a class component in React that automatically performs a shallow comparison of its props and state to determine whether it should re-render when new data is available. If there are no changes in the props or state (based on shallow comparisons), a PureComponent will not re-render, which can help improve the performance of your React application...</h4>
              </div><br/><br/>
              <div className="hoc">
                    <PureCompo />
              </div>
      </>
  );
}

export default App;
