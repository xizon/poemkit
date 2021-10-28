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
 * @uixkit.react/components/Tabs
 * ----------------------------------------
 */

import ReactTestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


import React from 'react';
import { TabsAnimated, TabList, TabPanel } from '@uixkit.react/components/TabsAnimated/index.tsx';


describe('Tabs', () => {

    const codeConstructor = (
        <TabsAnimated>
            <TabList data-testid="test-element-first-item" key="tab-list-1" defaultActive>Tab 1</TabList>
            <TabList data-testid="test-element-to-click" key="tab-list-2">Tab 2</TabList>
            <TabList key="tab-list-3">Tab 3</TabList>

            <TabPanel key="tab-panel-1" defaultActive>
                <p>Hi, this is the first tab.</p>
            </TabPanel>
            <TabPanel key="tab-panel-2">
                <p>This is the 2nd tab.</p>
                <p>This is the 2nd tab.</p>
                <p>This is the 2nd tab.</p>
            </TabPanel>
            <TabPanel key="tab-panel-3">
                <p>And this is the 3rd tab.</p>
            </TabPanel>
        </TabsAnimated>
    );

    const renderer = ReactTestRenderer.create(
        codeConstructor
    );

    console.log(renderer.toJSON());


    //
    test('renders initial tabs to <Tabs>...</Tabs>', () => {

        const { getByTestId } = render(codeConstructor);

       
        // The default style of the first item is `is-active`
        //------------------------------------------
        let firstItemClassName = getByTestId( 'test-element-first-item' ).className;
        expect( firstItemClassName).toMatch( 'is-active' );



        // Click event simulation
        // When the second item is clicked, the activation style of the first item is removed,
        // and the second is assigned the value `is-active`
        //------------------------------------------
        fireEvent.click(getByTestId( 'test-element-to-click' ));

        //
        let afterClick_firstItemClassName = getByTestId( 'test-element-first-item' ).className;
        let afterClick_secondItemClassName = getByTestId( 'test-element-to-click' ).className;
        expect( afterClick_firstItemClassName).not.toMatch( 'is-active' );
        expect( afterClick_secondItemClassName).toMatch( 'is-active' );

    });


});


