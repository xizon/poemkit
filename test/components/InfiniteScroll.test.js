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
 * @/components/InfiniteScroll
 * ----------------------------------------
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import InfiniteScroll from '@/components/InfiniteScroll/index.tsx';



//get data from asynchronous code
//-------------------------------------
import axios from 'axios';
//get project config
import { API } from '@/config/websiteConfig.js';


jest.mock('axios');

const url = API.RECEIVE_PAGE_LIST.replace('{page}', 1);
const fetchData = async () => {
    try {
        return await axios.get(url);
    } catch (e) {
        return [];
    }
};




//render component
//-------------------------------------
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});


//
describe('InfiniteScroll', () => {

    describe('when API call is successful', () => {

        it('should return dataHere list', async () => {
            // given
            const dataHere = {
                "page": 1,
                "per_page": 5,
                "total": 13,
                "total_pages": 3,
                "data": [
                    {
                        "id": 1,
                        "email": "george.bluth@reqres.in",
                        "name": "George",
                        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
                    },
                    {
                        "id": 2,
                        "email": "janet.weaver@reqres.in",
                        "name": "Janet",
                        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
                    },
                    {
                        "id": 3,
                        "email": "emma.wong@reqres.in",
                        "name": "Emma",
                        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
                    },
                    {
                        "id": 4,
                        "email": "eve.holt@reqres.in",
                        "name": "Eve",
                        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
                    },
                    {
                        "id": 5,
                        "email": "charles.morris@reqres.in",
                        "name": "Charles",
                        "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAGFBMVEXMzMyWlpbFxcW3t7eqqqq+vr6xsbGjo6NdFKDtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVRoge3SUQmAQBRE0WXRAC+C22AjbBcL2P9HQwwick6ACwPTGgAAAADfcFSuNYOtlWv1yrW2XKuvVGs/r0q1noG/b/UxRvATTUtLS0tLSwsAAADgTTdZSAdIz1EiEwAAAABJRU5ErkJggg=="
                    }
                ]
            };
            axios.get.mockResolvedValueOnce(dataHere);

            // when
            const result = await fetchData();

            // then
            expect(axios.get).toHaveBeenCalledWith(url);
            expect(result).toEqual(dataHere);
        });


        it('renders initial this component to <InfiniteScroll />', () => {

            const codeConstructor = (

                <InfiniteScroll 
                    perPage={10}
                    bottomOffset={0}
                    loader={<><span>Loading...</span></>}
                    endMessage={<><p className="poemkit-typo--color-sub poemkit-t-c">No content yet.</p></>}
                    method="get"
                    refreshCallback={(res) => console.log(res)}
                    renderCallback={(res) => {
                        return <div key={"item" + res.id}>{res.id}</div>;
                    }}	
                />
            );
    
    
            // Test first render and componentDidMount
            act(() => {
                ReactDOM.render(codeConstructor, container);
            });
    
            // HTML code is correct
            //------------------------------------------
            expect( container.firstChild.tagName ).toMatch( 'DIV' );
            
    

        });

    });

    describe("when API call fails", () => {
        it("should return empty dataHere list", async () => {
            // given
            const message = "Network Error";
            axios.get.mockRejectedValueOnce(new Error(message));

            // when
            const result = await fetchData();

            // then
            expect(axios.get).toHaveBeenCalledWith(url);
            expect(result).toEqual([]);
        });
    });

});



