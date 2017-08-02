import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import router from 'app/router/';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
  {router}
  </div>,
  document.getElementById('app')
);
