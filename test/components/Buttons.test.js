'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});



/*
 * @uixkit.react/components/Buttons
 * ----------------------------------------
 */

import ReactTestRenderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


import React from 'react';
import Button from '@uixkit.react/components/Buttons/index.js';


describe("<Button />", () => {
	
  const renderer = ReactTestRenderer.create(
	<Button data-testid="btn-element">Button Label</Button>
  );

  console.log(renderer.toJSON());
	

  //
  test('render <a>...</a>', () => {
    render(<Button href="https://google.com" data-testid="btn-element">Button Label</Button>);
		   
	const $btn = screen.getByTestId('btn-element');    
	expect($btn).toBeInTheDocument();
	expect($btn).toHaveAttribute('href', 'https://google.com');
	fireEvent.click($btn);
	 
  });
	
  //
  test('render <button>...</button>', () => {
    render(<Button data-testid="btn-element">Button Label</Button>);
		   
	const $btn = screen.getByTestId('btn-element');    
	expect($btn).toBeInTheDocument();
	expect($btn).toHaveAttribute('type', 'button');
	  
  });	
	

});


