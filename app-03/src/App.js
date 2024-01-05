import CounterCC from './CounterCC';
import CounterFC from './CounterFC';

const App =() => (
  <div className='container-fluid p-4'>
    <h4>React Js Component Life Cycle Methods and Hooks Demo</h4>
    <div className='row m-4'>
    <div className='col m-4'>
        <CounterCC />
      </div>  
      <div className='col m-4'>
        <CounterFC />
      </div>
    </div>
  </div>
);

export default App;
