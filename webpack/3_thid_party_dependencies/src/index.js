import * as _ from 'lodash';

document.getElementById('hello').addEventListener('click', () => {
    alert('Hello!');
    alert(_.add(1, 2));
});

import './styles.css';
// npm install material-design-lite --save
import 'material-design-lite';
import 'material-design-lite/material.min.css';
// import 'material-design-lite/dist/styles/material.css';