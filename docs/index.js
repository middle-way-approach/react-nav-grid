/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';

import 'purecss/build/pure.css';
import './main.css';
import App from './App';

ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/middle-way-approach/"
      bannerColor="#003b5c"
      octoColor="#fff"
      width={75}
      height={75}
      direction="right"
    />
    <App />
  </div>,
  document.getElementById('app')
);
