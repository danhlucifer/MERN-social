import { BrowserRouter as Router, Route } from 'react-router-dom'

import PagaRender from './PagaRender';

function App() {
  return (
    <Router>
      <input type="checkbox" id='theme' />
      <div className='App'>
        <div className='main'>
          <Route path="/:page" component={PagaRender} />
          <Route path="/:page/:id" component={PagaRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
