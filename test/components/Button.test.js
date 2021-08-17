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
 * @uixkit.react/components/Button
 * ----------------------------------------
 */

import ReactTestRenderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


import React from 'react';
import Button from '@uixkit.react/components/Button/index.tsx';



describe('Button', () => {

    const renderer = ReactTestRenderer.create(
        <Button data-testid="test-element">Button Label</Button>
    );

    console.log(renderer.toJSON());


    //
    test('renders initial button to <a>...</a>', () => {
        render(<Button href="https://google.com" data-testid="test-element">Button Label</Button>);

        const $btn = screen.getByTestId('test-element');

        // Received value must be an HTMLElement or an SVGElement.
        // .toBeInTheDocument() is an assertion that comes from jest-dom
        //------------------------------------------
        expect($btn).toBeInTheDocument();

        // Determine the type of button
        //------------------------------------------
        expect($btn).toHaveAttribute('href', 'https://google.com');

        // Click event simulation
        //------------------------------------------
        fireEvent.click($btn);

    });

    //
    test('renders initial button to <button>...</button>', () => {
        render(<Button data-testid="test-element">Button Label</Button>);

        const $btn = screen.getByTestId('test-element');

        // Received value must be an HTMLElement or an SVGElement.
        // .toBeInTheDocument() is an assertion that comes from jest-dom
        //------------------------------------------
        expect($btn).toBeInTheDocument();

        // Determine the type of button
        //------------------------------------------
        expect($btn).toHaveAttribute('type', 'button');

    });


});


