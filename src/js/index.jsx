import React from 'react';
import { render } from 'react-dom';
import HelloMessage from './components/HelloMessage';

require('../scss/app.scss');

const mountNode = document.getElementById('app');
render(<HelloMessage name="Tyler" />, mountNode);
