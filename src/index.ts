import * as _ from 'lodash';
import  { showMessage } from './test-js-sub'

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    showMessage();

    return element;
  }

  document.body.appendChild(component());