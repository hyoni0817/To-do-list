import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';

import Main from './component/Main';

const Hot = hot(Main);

ReactDOM.render(<Hot />, document.querySelector('#root'));
