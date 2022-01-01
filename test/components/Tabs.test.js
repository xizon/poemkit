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
 * @/components/Tabs
 * ----------------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Tabs, TabList, TabPanel } from '@/components/Tabs/index.tsx';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


describe('Tabs', () => {


    it('renders initial this component to <Tabs>...</Tabs>', () => {

        const codeConstructor = (
            <Tabs type="normal">
                <TabList data-testid="test-element-first-item" key="tab-list-1" defaultActive>Tab 1</TabList>
                <TabList data-testid="test-element-to-click" key="tab-list-2">Tab 2</TabList>
                <TabList key="tab-list-3">Tab 3</TabList>

                <TabPanel key="tab-panel-1" defaultActive>
                    <p>Hi, this is the first tab.</p>
                </TabPanel>
                <TabPanel data-testid="test-elementTarget-to-click" key="tab-panel-2">
                    <p>This is the 2nd tab.</p>
                    <p>This is the 2nd tab.</p>
                    <p>This is the 2nd tab.</p>
                </TabPanel>
                <TabPanel key="tab-panel-3">
                    <p>And this is the 3rd tab.</p>
                </TabPanel>
            </Tabs>
        );


        // Test first render and componentDidMount
        act(() => {
            ReactDOM.render(codeConstructor, container);
        });

        // The default style of the first item is `is-active`
        //------------------------------------------
        const $tabsItemFirst = container.querySelector(`[data-testid="test-element-first-item"]`).parentElement;
        let firstItemClassName = $tabsItemFirst.className;
        expect( firstItemClassName).toMatch( 'is-active' );



        // Click event simulation
        // When the second item is clicked, the activation style of the first item is removed,
        // and the second is assigned the value `is-active`
        //------------------------------------------
        const $tabsItemSecond = container.querySelector(`[data-testid="test-element-to-click"]`).parentElement;
        act(() => {
            $tabsItemSecond.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        const $tabsContentSecond = container.querySelector(`[data-testid="test-elementTarget-to-click"]`);
        let secondContentClassName = $tabsContentSecond.className;
        let firstItemClassName_clicked = $tabsItemFirst.className;
        expect( firstItemClassName_clicked).not.toMatch( 'is-active' );
        expect( secondContentClassName).toMatch( 'is-active' );

        
    });



});
