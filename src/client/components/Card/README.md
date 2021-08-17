# @uixkit.react/components/Card

[Source](https://github.com/xizon/uix-kit-react/tree/main/src/client/components/Card)

## Version

=> 0.0.1


## Examples

```js
import React from 'react';
import Card from '@uixkit.react/components/Card/index.tsx';

//get project config
import { rootDirectory } from '@uixkit.react/config/websiteConfig.js';

export default () => {
  return (
    <>

      <h3>Thumbnail Card</h3>
      <p>The following is a Thumbnail style card using flex.</p>
      {/* ================================================================== */} 

      <Card type="thumb" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} bgConfig={null} title="Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={false} subTitle={null} btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} btnClickEvent={(e) => {e.preventDefault(); alert('click event');} }>Harum, ad porro molestiae corporis natus aut non fugit. Recusandae, reprehenderit, voluptate voluptas reiciendis voluptatum tempora vero vel libero facere fuga maiores ratione eaque ad illum porro dignissimos sit eos.</Card>


      <Card type="thumb" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} bgConfig={null} title="Title" titleEllipsis={true} subTitle={<a href="https://uiux.cc" target="_blank">@https://uiux.cc</a>} btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>}>Harum, ad porro molestiae corporis natus aut non fugit. Recusandae, reprehenderit, voluptate voluptas reiciendis voluptatum tempora vero vel libero facere fuga maiores ratione eaque ad illum porro dignissimos sit eos.</Card>

                      

      <Card type="thumb" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} bgConfig={null} title="Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={true} subTitle={<a href="https://uiux.cc" target="_blank">@https://uiux.cc</a>}>Harum, ad porro molestiae corporis natus aut non fugit. Recusandae, reprehenderit, voluptate voluptas reiciendis voluptatum tempora vero vel libero facere fuga maiores ratione eaque ad illum porro dignissimos sit eos.</Card>

							 
      <h3>Gallery Card</h3>
      <p>The following is a gallery style card using flex.</p>
      {/* ================================================================== */} 

      <Card type="gallery-v-img" avatar={null} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg` }} title="Name" titleEllipsis={false} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} btnClickEvent={(e) => { e.preventDefault(); alert('click event'); }} overlayArea={<>
        <div className="uix-card--gallery__status">
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.33 469.33" fill="currentColor">
              <path d="M320 213.33c35.3 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 213.33c35.31 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 256C99.52 256 0 280.96 0 330.67V384h298.67v-53.33c0-49.71-99.52-74.67-149.34-74.67zM320 256c-6.19 0-13.12.43-20.59 1.17 24.75 17.82 41.92 41.82 41.92 73.5V384h128v-53.33c0-49.71-99.52-74.67-149.33-74.67z"></path>
            </svg>3,3434
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 469.33 469.33">
              <path d="M234.67 170.67c-35.31 0-64 28.69-64 64s28.69 64 64 64 64-28.7 64-64-28.7-64-64-64z"></path>
              <path d="M234.67 74.67C128 74.67 36.9 141 0 234.67c36.9 93.65 128 160 234.67 160 106.77 0 197.76-66.35 234.66-160-36.9-93.66-127.89-160-234.66-160zm0 266.66c-58.88 0-106.67-47.78-106.67-106.66S175.79 128 234.67 128s106.66 47.79 106.66 106.67-47.78 106.66-106.66 106.66z"></path>
            </svg>124
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 475.43 475.43">
              <path d="M306.9 164.57l78.9-86.2a7.83 7.83 0 001.56-8.36 8.36 8.36 0 00-7.3-4.7h-253.4s-3.13 0-3.13.52v-9.4a26.12 26.12 0 0021.94-27.7A28.73 28.73 0 00117.26 0a29.78 29.78 0 00-29.78 28.73 30.82 30.82 0 0020.37 27.7v411.16a7.84 7.84 0 0015.68 0V263.84h256.52c3.2.2 6.17-1.7 7.31-4.7a8.36 8.36 0 00-1.56-8.36l-78.9-86.2z"></path>
            </svg>June 1
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 411.14 411.14">
              <path d="M350.2 54.53H61.45C27.64 54.53 0 82.18 0 115.97v179.2c0 33.8 27.65 61.44 61.44 61.44H349.7c33.79 0 61.44-27.65 61.44-61.44v-179.2c.5-33.8-27.14-61.44-60.93-61.44zM287.75 210.7a11.96 11.96 0 01-3.58 3.59l-119.3 70.65a9.93 9.93 0 01-13.82-3.58 8.65 8.65 0 01-1.54-5.12V134.92c0-5.64 4.61-10.24 10.24-10.24 1.54 0 3.59.5 5.12 1.53l119.3 70.66c4.6 3.07 6.66 9.21 3.58 13.82z"></path>
            </svg>13
          </div>
        </div>
      </>} />




      <Card type="gallery-v-img" avatar={null} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg` }} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={false} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} />



      <Card type="gallery-v-img" avatar={null} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg` }} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={true} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} />



      {/*    /////////////////////////   */} 

      <Card type="gallery-icon" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={true} subTitle="0/15/18" />



      <Card type="gallery-icon" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={false} subTitle="0/15/18" />


      <Card type="gallery-icon" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={true} subTitle="0/15/18" />



      <Card type="gallery-icon" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={false} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} btnClickEvent={(e) => { e.preventDefault(); alert('click event'); }} />



      {/*    /////////////////////////   */} 


      <Card type="gallery-icon-abreast" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={true} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} btnClickEvent={(e) => { e.preventDefault(); alert('click event'); }} />



      <Card type="gallery-icon-abreast" icon={<>
        <svg width="30" height="30" viewBox="0 0 512 512">
          <g>
            <rect width="109.2" x="82.3" y="96.9" height="20.8" />
            <rect width="109.2" x="82.3" y="158.2" height="20.8" />
            <rect width="256.9" x="82.3" y="218.6" height="20.8" />
            <rect width="256.9" x="82.3" y="278.9" height="20.8" />
            <path d="m487.9,249.7c-16.3-16.3-42.7-16.3-59,0l-22.1,22.1v-112.5c0-3.1-1-5.2-3.1-7.3l-137.3-137.3c-2.1-2.1-4.2-3.1-7.3-3.1h-237.2c-6.2,0-10.4,4.2-10.4,10.4v468.1c0,6.2 4.2,10.4 10.4,10.4h374.5c6.2,0 10.4-4.2 10.4-11.4v-99.3l81.1-81.1c16.3-16.3 16.3-42.7 0-59zm-218.4-202.8l101.9,101.9h-101.9v-101.9zm116.5,432.8h-353.7v-447.3h216.4v126.9c0,6.2 4.2,10.4 10.4,10.4h126.9v122.9l-99.2,99.2-8.8,67.8 67.8-8.8 40.3-40.3v69.2zm87.2-186.1l-136.8,136.8-35,5.7 5.7-35 136.8-136.8c8.1-8.1 21.2-8.1 29.3,0 8.1,8.1 8.1,21.2 0,29.3z" />
          </g>
        </svg>
      </>} title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title" titleEllipsis={false} subTitle="0/15/18" btnIcon={<i className="fa fa-ellipsis-h" aria-hidden="true"></i>} />


      {/*    /////////////////////////   */} 


      <Card type="gallery-h-img" contentRatio={8} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4">
          <small className="uix-typo--color-sub">Categories</small>
          <h3>Full-stack Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum, perferendis ad impedit iste assumenda et laborum doloribus optio molestiae perspiciatis modi quaerat corrupti velit cupiditate eligendi tempora temporibus vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum, perferendis ad impedit iste assumenda et laborum doloribus optio molestiae perspiciatis modi quaerat corrupti velit cupiditate eligendi tempora temporibus vel. consectetur adipisicing elit. Saepe, voluptatum, perferendis ad impedit iste assumenda et laborum doloribus optio molestiae perspiciatis modi quaerat corrupti velit cupiditate eligendi tempora temporibus vel</p>
        </span>
      </Card>


      <Card type="gallery-h-img" contentRatio={4} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4">
          <small className="uix-typo--color-sub">Categories</small>
          <h3>Full-stack Designer</h3>
          <p>Focus on user interface, user experience, awesome websites, front-end and WordPress development.</p>
        </span>

      </Card>


      {/*    /////////////////////////   */} 


      <Card type="gallery-v-custom" bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x600.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4">
          <small className="uix-typo--color-sub">Categories</small>
          <h3>Full-stack Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum, perferendis ad impedit iste assumenda et laborum doloribus optio molestiae perspiciatis modi quaerat corrupti velit cupiditate eligendi tempora temporibus vel.</p>
        </span>

      </Card>



      <Card type="gallery-v-custom" bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }} overlayArea={<>
        <div className="uix-card--gallery__status">
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.33 469.33" fill="currentColor">
              <path d="M320 213.33c35.3 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 213.33c35.31 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 256C99.52 256 0 280.96 0 330.67V384h298.67v-53.33c0-49.71-99.52-74.67-149.34-74.67zM320 256c-6.19 0-13.12.43-20.59 1.17 24.75 17.82 41.92 41.82 41.92 73.5V384h128v-53.33c0-49.71-99.52-74.67-149.33-74.67z"></path>
            </svg>3,3434
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 469.33 469.33">
              <path d="M234.67 170.67c-35.31 0-64 28.69-64 64s28.69 64 64 64 64-28.7 64-64-28.7-64-64-64z"></path>
              <path d="M234.67 74.67C128 74.67 36.9 141 0 234.67c36.9 93.65 128 160 234.67 160 106.77 0 197.76-66.35 234.66-160-36.9-93.66-127.89-160-234.66-160zm0 266.66c-58.88 0-106.67-47.78-106.67-106.66S175.79 128 234.67 128s106.66 47.79 106.66 106.67-47.78 106.66-106.66 106.66z"></path>
            </svg>124
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 475.43 475.43">
              <path d="M306.9 164.57l78.9-86.2a7.83 7.83 0 001.56-8.36 8.36 8.36 0 00-7.3-4.7h-253.4s-3.13 0-3.13.52v-9.4a26.12 26.12 0 0021.94-27.7A28.73 28.73 0 00117.26 0a29.78 29.78 0 00-29.78 28.73 30.82 30.82 0 0020.37 27.7v411.16a7.84 7.84 0 0015.68 0V263.84h256.52c3.2.2 6.17-1.7 7.31-4.7a8.36 8.36 0 00-1.56-8.36l-78.9-86.2z"></path>
            </svg>June 1
          </div>
          <div className="uix-card--gallery__status__item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 411.14 411.14">
              <path d="M350.2 54.53H61.45C27.64 54.53 0 82.18 0 115.97v179.2c0 33.8 27.65 61.44 61.44 61.44H349.7c33.79 0 61.44-27.65 61.44-61.44v-179.2c.5-33.8-27.14-61.44-60.93-61.44zM287.75 210.7a11.96 11.96 0 01-3.58 3.59l-119.3 70.65a9.93 9.93 0 01-13.82-3.58 8.65 8.65 0 01-1.54-5.12V134.92c0-5.64 4.61-10.24 10.24-10.24 1.54 0 3.59.5 5.12 1.53l119.3 70.66c4.6 3.07 6.66 9.21 3.58 13.82z"></path>
            </svg>13
          </div>
        </div>
      </>}>
        <span className="d-block m-4">
          <h4 className="uix-spacing--no">Full-stack Designer</h4>
        </span>
      </Card>



      <Card type="gallery-v-custom" bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x309.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        {/*<!-- menu group begin -->*/}
        <div className="uix-card--gallery__menu">
          <div className="uix-card--gallery__menu__avatar">
            <img src={`${rootDirectory}/assets/images/demo/avatar.jpg`} alt="" className="uix-border--circle" />
            <span>UIUX Lab</span>
          </div>

          <div className="uix-card--gallery__menu__items">
            <a>Link 1</a>
            <a className="is-active">Link 2</a>
            <a>Link 3</a>
            <a>Link 4</a>
          </div>

          <div className="uix-card--gallery__menu__action">
            <button>2,321</button>
            <button>Follow</button>
          </div>
        </div>

        {/*<!-- menu group end -->*/}
      </Card>




      {/*    /////////////////////////   */} 



      <Card type="gallery-full-info" verticalCenter={false} contentRatio={12} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4 uix-typo--color-white">
          <small className="uix-typo--color-sub">Categories</small>
          <h4 className="uix-spacing--no">Full-stack Designer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </span>
      </Card>



      <Card type="gallery-full-info" verticalCenter={false} contentRatio={5} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4 uix-typo--color-white">
          <small className="uix-typo--color-sub">Categories</small>
          <h4 className="uix-spacing--no">Content ratio is 5:7 (12 grid system)</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </span>
      </Card>

      

      <Card type="gallery-full-info" verticalCenter={true} contentRatio={6} bgConfig={{ "src": `${rootDirectory}/assets/images/demo/spiral-galaxy-1920x1080.jpg`, "position": "center center", "size": "cover", "repeat": "no-repeat", "fill": false }}>
        <span className="d-block m-4 uix-typo--color-white">
          <h4 className="uix-spacing--no">Vertically center content ratio is 1:1 (12 grid system)</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="#" className="uix-btn uix-btn__border--thin uix-btn__size--s uix-btn__bg--secondary is-pill is-fill-white">Check Out</a>
        </span>
      </Card>



            
      <h3>Author Card</h3>
      <p>Author Card is a very popular used web page element that can display a lot of key information.</p>
      {/* ================================================================== */} 
      
      <Card type="authorcard-line" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} title="Full-stack Designer" titleEllipsis={false} subTitle={<a href="https://uiux.cc" target="_blank">@https://uiux.cc</a>} btnIcon={<i className="fa fa-external-link" aria-hidden="true"></i>} btnHyperlinkClickEvent={(e) => { e.preventDefault(); alert('click event'); const tempwindow = window.open('_blank'); tempwindow.location = 'https://uiux.cc'; }}>Hi. I'm a full-stack designer on the way of pursuing the dream. Focus on user interface, user experience, awesome websites, front-end and WordPress development. I want to build things I can be proud of. I approach some awesome design challenges with an eye on the latest trends and strive to align my work the industry current best practices, while leveraging the acquired experience on the field. I have been working so hard to build up self. My personal website: https://uiux.cc</Card>


      {/*    /////////////////////////   */} 


      <Card type="authorcard-detail" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} title="Full-stack Designer" titleEllipsis={false} subTitle={<a href="https://uiux.cc" target="_blank">@https://uiux.cc</a>} >

        <ul className="mt-4">
          <li><h3>223</h3><span>Web Design</span></li>
          <li><h3>13</h3><span>UI</span></li>
          <li><h3>5</h3><span>SEO</span></li>
        </ul>
        <p>
          Hi. I'm a full-stack designer on the way of pursuing the dream. Focus on user interface, user experience, awesome websites, front-end and WordPress development.
        </p>										
      </Card>


      {/*    /////////////////////////   */} 


      <Card type="authorcard-stats" avatar={`${rootDirectory}/assets/images/demo/avatar.jpg`} >
        <div className="uix-card--author__tagline">Revenue</div>
        <h4 className="uix-typo--style-normal">$34,245</h4>

        <hr />
        <i className="fa fa-calendar" aria-hidden="true"></i> Last 24 Hours	
      </Card>

		

    </>
  );
}

```