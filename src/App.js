import React from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './App.scss';

function App (){
  return (
    <div className="app">
      <h1 className="app__header">
        Advanced React
      </h1>

      <nav>
        <Link to="/"><button>Presentational</button></Link>
        <Link to="/hocphotos"><button>HOC Photos</button></Link>
        <Link to="/hocproducts"><button>HOC Products</button></Link>
        <Link to="/renderphotos"><button>Render Props Photos </button></Link>
        <Link to="/renderproducts"><button>Render Props Products</button></Link>
      </nav>

      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
