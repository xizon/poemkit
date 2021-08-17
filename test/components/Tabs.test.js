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
import { Tabs, TabList, TabPanel } from '@uixkit.react/components/Tabs/index.tsx';


describe('Tabs', () => {

    const codeConstructor = (
        <Tabs data-testid="test-element" type="normal">
            <TabList key="tab-list-1" defaultActive>Tab 1</TabList>
            <TabList key="tab-list-2">Tab 2</TabList>
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
        </Tabs>
    );

    const renderer = ReactTestRenderer.create(
        codeConstructor
    );

    console.log(renderer.toJSON());


    //
    test('renders initial tabs to <Tabs>...</Tabs>', () => {

        const { container } = render(codeConstructor);


        // Received value must be an HTMLElement or an SVGElement.
        // .toBeInTheDocument() is an assertion that comes from jest-dom
        //------------------------------------------
        expect(container).toBeInTheDocument();


        // The default style of the first item is `is-active`
        //------------------------------------------
        const $tabsItemFirst = container.querySelectorAll(`[data-testid="test-element"] [role="tablist"] > li`)[0];
        let firstItemClassName = $tabsItemFirst.className;
        expect( firstItemClassName).toMatch( 'is-active' );



        // Click event simulation
        // When the second item is clicked, the activation style of the first item is removed,
        // and the second is assigned the value `is-active`
        //------------------------------------------
        const $tabsItemSecond = container.querySelectorAll(`[data-testid="test-element"] [role="tablist"] > li`)[1];
        fireEvent.click($tabsItemSecond);

        const $tabsContentSecond = container.querySelectorAll(`[data-testid="test-element"] [role="tabpanel"]`)[1];
        let secondContentClassName = $tabsContentSecond.className;
        let firstItemClassName_clicked = $tabsItemFirst.className;
        expect( firstItemClassName_clicked).not.toMatch( 'is-active' );
        expect( secondContentClassName).toMatch( 'is-active' );

    });


});


