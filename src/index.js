import React from 'react';
import ReactDOM from 'react-dom';

//CSS File imports
import './css/normalize.css';
import './css/index.css';

//Image File imports
import './img/alex-grodkiewicz-80908-unsplash.jpg'
import './img/tyler-lillico-443202-unsplash.jpg'
import './img/tom-butler-218-unsplash.jpg'
import './img/sandra-ahn-mode-639495-unsplash.jpg'
import './img/sandra-ahn-mode-639490-unsplash.jpg'
import './img/leo-rivas-25956-unsplash.jpg'

//Components imports
import App from './components/container/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
