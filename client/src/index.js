//connect react application to index.html file

import React from 'reactt';
import ReactDom from 'react-dom';

import App from './App';

//connecting to the div with an ID of 'root'
ReactDOM.render(<App />, document.getElementById('root'));