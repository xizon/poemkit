'use strict';

import ReactTestRenderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


/*-----
 * @uixkit.react/components/Buttons
 * ------*/

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


