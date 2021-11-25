# Changelog

#### = 0.1.7 (November 25, 2021) =

* Tweak: Built-in component style optimization.


#### = 0.1.6 (November 23, 2021) =

* Fix: Fixed Rendering breakpoint bug(s) in different resolutions.
* Tweak: Optimized the performance of the component Modal Dialog.
* Tweak: Separate the styles of some components to make each component more clear.
* Tweak: Naming check of some components.
* Tweak: Adjusts ES modules tree shaking by default for JS part.
* New: Add new UI components `ContentPlaceholder`.
* New: Add new UI components `Tooltip`.
* New: Add new UI components `ListBulleted`.
* New: Add new UI components `ImagePerspectiveHover`.
* New: Add vertical layout of navigation component.
* New: Add a form type of Tag Input.
* New: Add image transition animation to Scroll Reveal component.



#### = 0.1.5 (November 8, 2021) =

* New: Added Site Address (URL) configuration of the `./src/config/websiteConfig.js` for SEO.
* New: Accessible URL, Technical SEO, and making your site search engine friendly with React Helmet.
* New: New component Unit Testing examples are added.
* New: Add new UI components `ImageShapes`.
* New: Add new UI components `MousewheelInteraction`.
* New: Add new UI components `HybridContentSlider`.
* New: Add new UI components `Timeline`.
* New: Add new UI components `SeamlessScrollingElement`.
* New: Add new UI components `PeriodicalScroll`.
* New: Add new UI components `ShowMoreLess`.
* Tweak: Enhanced the animate method in helper scripts.
* Tweak: Add progress spy to AJAX Loader of Lightbox.
* Tweak: Modified the picture loading status of `Parallax`.
* Tweak: Optimized some component algorithms to improve performance.


#### = 0.1.3 (October 28, 2021) =

* New: Add new UI components `MultilevelDropdownMenu`.
* New: Add new UI components `CascadingDropDownList`.
* New: Add new UI components `Gallery`.
* New: Add new UI components `InfiniteScroll`.
* New: Add new UI components `Pagination`.
* New: Added a demonstration of asynchronous paging.
* New: Added the callback function method of the select form component.
* New: Added `optionChangeCallback()` callback function to the drop-down menu and select control.
* Fix: Fixed some issues with parallax component.
* Fix: Fixed the position problem of mega menu.
* Fix: Fixed the problem that the helper script gets the width and height.
* Fix: Fixed the problem that the width and height of hidden elements in the helper script may be 0.
* Tweak: Optimized redux patterns for ensuring good performance.
* Tweak: Changed the test API of Posts.
* Tweak: Optimized the `htmlEncode()` and `htmlDecode()` methods of core helpers.
* Tweak: Removed redundant SCSS files and moved some files to the corresponding component folder.
* Tweak: Enhanced the `prev()`, `next()`, `parent()`, `parents()` and `siblings()` methods in the core helpers script, and supports HTML node, ID and Class selectors.
* Tweak: Adjusted the side navigation of the component demo.
* Tweak: Improved the performance for all UI components.
* Tweak: Delete unnecessary props on a DOM element from UI components.
* Tweak: Component comments adjustment.
* Refactor: Refactored some components to use React hooks to optimize performance.
* Refactor: Partially refactor the component `Accordion`, `AccordionSlider`, `Tabs`, `Table`, `Table Sorter`, `Header` and `Navigation`.




#### = 0.1.2 (October 13, 2021) =

* Fix: Fixed the wrong width, height and position of the large image triggered by the Lightbox component.
* Fix: Fixed the result of the closest() prototype chain method for the core helpers.


#### = 0.1.1 (October 12, 2021) =

* New: Add new UI components `Slideshow`.
* New: Add new UI components `Back To Top`.
* New: Add new UI components `Lightbox`.
* New: Add new UI components `Progress Bar`.
* New: Add new UI components `Sticky Elements`.
* Fix: Optimized the click event in the component to avoid repeated triggering.
* Fix: Fixed the JSON judgment in the script.
* Fix: Fixed the effect of the child `position:fixed` containing the `transform` attribute in the parent Tag.
* Refactor: Some UI component traversal performance adjustments, delete unnecessary events.
* Tweak: Changed some descriptions of this Github project.
* Tweak: Optimized off() method for the core helpers.
* Tweak: Removed some unneeded style files in UI components.
* Tweak: Adjusted the undefined and null judgment of variables.
* Tweak: Refactored the traversal judgment of the default configuration in the function.
* Tweak: Modified the remote API interface of POSTS test.
* Tweak: Use `componentWillUnmount()` to optimize the performance of scroll listening components.
* Tweak: Optimized the mounting performance of all components.
* Tweak: Rename the tool `shortcut.js` to `helpers.js`  in the component library.
* Tweak: Enhanced touch performance of mobile devices.


#### = 0.1.0 (September 27, 2021) =

* New: Add new UI components `Accordion`.
* New: Add new UI components `Accordion Slider`.
* New: Add new UI components `Counter`.
* New: Add new UI components `Dropdown Menu`.
* New: Add new UI components `Modal Dialog`.
* New: Added animate() method for the core helpers.
* Fix: Fixed some issues with the `__()` selector.
* Fix: Fixed the display problem of some UI components.
* Fix: Fixed off() method for the core helpers.
* Tweak: Optimized selectors for the core helpers.
* Tweak: Refactored some Vanilla JS general tool scripts.
* Tweak: Improved the performance and stability of the Vanilla JavsScript tool library, and fixed possible problems in some methods.
* Tweak: Optimized the documentation of UI components.



#### = 0.0.9 (September 14, 2021) =

* New: Added API documentation for UI components.
* New: Add new UI components `Grid`.
* Tweak: Optimized UI component library.
* Tweak: Optimized `find()` for the core helpers.


#### = 0.0.8 (August 20, 2021) =

* Fix: Fixed the error that may occur when axios asynchronous request. To avoid causing 502 Proxy Error errors when requesting from the express server.
* Tweak: Optimize the demo experience with components.
* Tweak: Optimized the performance of dynamically adding style and sidebar navigation.


#### = 0.0.5 (August 16, 2021) =

* New: TypeScript Support.
* New: Add new UI components `Card`.
* New: Add new UI components `Parallax`.
* New: Added some new methods `prependTo()`, `appendTo()`, `text()`, `clone()` and `parents()` to core helpers.
* New: Upgrade webpack 4 to 5. Compilation speed and performance are greatly improved.
* New: Update and compatible debugging of Node related dependencies
* Fix: Fixed some issues with the `__()` selector.
* Fix: Fixed the bug that the value of the Number control in the form component was not updated after the route was triggered (the page was not refreshed).
* Tweak: Refactor all UI components using TypeScript.
* Tweak: Convert core files to TypeScript.
* Tweak: Optimized the command script.
* Tweak: Optimized mobile and desktop navigation.
* Tweak: Added a new method to core helpers.
* Tweak: Optimized some component related codes.
* Tweak: Optimized part of the naming of the component library.
* Tweak: Optimization and review of overall code and comments.
* Tweak: Modify the folder name `src/client/components/_utilities` to `src/client/components/_utils`.
* Tweak: Component file directory optimization.


#### = 0.0.43 (July 2, 2021) =

* New: Add some React component unit tests.
* Tweak: Key test optimization techniques.


#### = 0.0.42 (June 21, 2021) =

* New: Test-driven React.js Development: React.js Unit Testing with Jest.



#### = 0.0.41 (June 11, 2021) =

* Tweak: Optimized the JWT communication of axios.
* Tweak: Adjust the structure of JWT permission demonstration.
* Tweak: Admin and Member page permission management.
* Remove: Removed unnecessary HTML calls in the demo.



#### = 0.0.40 (June 10, 2021) =

* New: Create JWT of business logic development with react and redux.
* Tweak: Optimized the structure of redux.


#### = 0.0.37 (June 8, 2021) =


* New: Added `throttle()` and `debounce()` to the core helpers.
* New: Add new UI components `Scroll Reveal`.
* New: Added new form controls: `Password Input`, `Merge Input`, `File Field`.
* Tweak: Added default assignments for some controls.
* Tweak: Optimized the event binding name of the element.
* Tweak: Modify the plugin directory `./src/client/components/_third-party-plugins` to `./src/client/components/_plugins`.
* Tweak: Removed redundant HTML tags.
* Tweak: Throttling and debouncing optimization of high-frequency interactive events.
* Tweak: Modified the type of label in the form control can be Object.



#### = 0.0.36 (June 2, 2021) =

* New: Added new form controls: `Textarea`, `Select`, `Custom Select`, `Checkbox`, `Radio`, `Multiple Select`, `Single Select`, `Date`, `Number`, `Switch`, `Dynamic Fields`, `File`.
Tweak: Adjusted Node.js script location.


#### = 0.0.35 (May 20, 2021) =

Tweak: Modified global environment variables during testing.
Tweak: Optimize commands for node.


#### = 0.0.33 (May 14, 2021) =

* New: Added new demo `Form` controls. It contains the following controls: 	`Input`.
* New: Added a new method `toSlug()` to core helpers.
* Tweak: Optimized the scripts of some demo components.
* Doc: Added the key description of the product.
* Fix: Fixed the problem of each traversal of the `Table` component script.
* Fix: Fixed loop errors by nesting other methods in each() method via core helpers.
* Security: Upgrade serialize-javascript to version 4.0.0 or later.



#### = 0.0.32 (May 12, 2021) =

* New: Added new demo `Table`, `Table Sorter` and `Table Grid` using json for rendering data.
* New: Added a new method `wrapInner()` to core helpers.
* Doc: The document has been optimized in some details.
* Fix: Fixed the `html()` method in core helpers.


#### = 0.0.31 (April 29, 2021) =

* Tweak: `webpack.config.js` optimization.
* Tweak: Added a new method to core helpers.
* Tweak: Optimized some scripts.


#### = 0.0.30 (April 28, 2021) =

* New: Automatically generate `manifest.json` to `public/` folder.



#### = 0.0.29 (April 28, 2021) =

* New: Add new demo `Swiper`.
* Tweak: Change the header styles and primary colors.
* Tweak: Optimize some script structures in the default component library.
* Fix: Fixed the title rendering problem of the post detail page.
* Tweak: Added website configuration method to the README files.



#### = 0.0.28 (April 26, 2021) =

* New: Added the root directory configuration method for server-side deployment.


#### = 0.0.27 (April 26, 2021) =

* New: The loader of the helpers function adds the judgment condition of the video loading.
* New: Integrate the video playback function into the UI component through the plyr plug-in.
* Tweak: Component detail optimization and debugging.
* Tweak: Modify the method name of the helpers function `imagesloaded` to `loader`.
* Tweak: Adjusted the introduction of third-party plug-ins.
* Fix: Fixed some mouse event issues for core helpers.




#### = 0.0.26 (April 23, 2021) =

* Tweak: Adjustment of the resource directory structure.
* New: Add development mode and component compile-time debugging.
* New: Add new UI components `Tabs Animated`.
* Tweak: Simplified the import method of third-party plugin import.


#### = 0.0.23 (April 22, 2021) =

* New: Turn on typechecking on the props for a component in development mode.
* New: Add new UI components `Tabs`.
* Tweak: Detail optimization.
* Tweak: Refine the README documents.
* Fix: Fixed some issues for core helpers.



#### = 0.0.22 (April 20, 2021) =

* New: Embedding and debugging of navigation and common modules.
* New: New extension of utilities script.
* New: Add more UI components.
* Tweak: Component path adjustment for better use of aliases.
* Fix: Fixed an issue where it was judged that the image was completely loaded in utilities `__( '' ).imagesloaded()` and might not be displayed because the image did not exist on page.



#### = 0.0.20 (April 18, 2021) =

* Detail optimization.


#### = 0.0.19 (April 16, 2021) =

* Supports directories and custom aliases for specific files when the express server is running.
* Detail optimization.
* Router Pages optimization.


#### = 0.0.17 (April 15, 2021) =

* Add Nested Routes demo.
* Add more UI components.
* Minor adjustment of the Router directory structure. 


#### = 0.0.16 (April 13, 2021) =

* Adjustment of the resource directory structure.
* Refactor the helpers tool library and refactor the selector function.


#### = 0.0.15beta (April 7, 2021) =

* Standardize the navigation menu of the presentation.
* Add independent component demos which embeds Bootstrap, videojs, tweenmax and fontawesome.


#### = 0.0.1beta (April 6, 2021) =

* First release.
