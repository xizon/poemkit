/** 
 * Create or Remove Sidebar Menu 
 * 
 */
function throttle( fn, limit ) {
    let waiting = false;                     
    return function () {                     
        if (!waiting) {                       
            fn.apply(this, arguments);  
            waiting = true;                  
            setTimeout(function () {          
                waiting = false;           
            }, limit);
        }
    }
}

function createSidebarMenu( navItems ) {
	// A few variables for use later
	const navElem = document.createElement("nav"),
		  navList = document.createElement("ul");
			
		let navItem, navLink;

	navElem.className = 'app-sidebar-menu';
	navElem.appendChild(navList);
	
	// Cycle over each nav item
	for (let i = 0; i < navItems.length; i++) {
		// Create a fresh list item, and anchor
		navItem = document.createElement("li");
		navLink = document.createElement("a");
		
		// Set properties on anchor
		navLink.href = navItems[i].href;
		navLink.innerHTML = navItems[i].text;
		
		// Add anchor to list item, and list item to list
		navItem.appendChild(navLink);
		navList.appendChild(navItem);

	}
	

	// Add list to body (or anywhere else)
	document.body.appendChild(navElem);

	
	// Smooth scrolling when clicking an anchor link
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		//only sidebar
		if ( anchor.closest( '.app-sidebar-menu' ) !== null || anchor.closest( '.app-header-title' ) !== null ) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				
				let _href = this.getAttribute('href');
				if ( _href === '#' ) _href = '#demo';
				
				const targetEl = document.querySelector( '#' + _href.split( '#' )[1] );
				if ( targetEl !== null ) {
					const elTop = targetEl.offsetTop;
					window.scrollTo({ top: elTop, behavior: 'smooth' });
				}

			});
		}

	});

	
}


function highlightNavigation() {
	// get the current vertical position of the scroll bar
	const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

	// iterate the sections
    const $sections = [];
    Array.prototype.slice.call(document.querySelectorAll('h3.app-header-title')).forEach( function(node) {
        $sections.push( node.closest( 'section' ) );
    });
    

	for (let i = $sections.length-1; i >= 0; i--) {
		const currentSection = $sections[i];
		const sectionTop = currentSection.offsetTop;

	   // if the user has scrolled over the top of the section  
		if (scrollPosition >= sectionTop - 250) {
		
			const curID = currentSection.id;
            const sidebarMenuItems = document.querySelectorAll( '.app-sidebar-menu ul > li > a' );
            sidebarMenuItems.forEach(item => {
                const _url = item.getAttribute('href').replace( '#', '' );

                if (curID === _url) {
                    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

						//only sidebar
						if ( anchor.closest( '.app-sidebar-menu' ) !== null || anchor.closest( '.app-header-title' ) !== null ) {
							const _parent = anchor.parentNode;
							if ( _parent ) {
								_parent.classList.remove( 'is-active' );
							}
						}

                    });
        
                    const _parentCur = item.parentNode;
                    if ( _parentCur ) {
                        _parentCur.classList.add( 'is-active' );
                    }
            
                }
        
            });


			// we have found our section, so we return false to exit the each loop
			return false;
		}
	}
}


export function SidebarMenu() { 

	if ( typeof(document) === 'undefined' ) return;

	//-----
	Array.prototype.forEach.call( document.querySelectorAll( '.app-sidebar-menu' ), function( node ) {
		node.parentNode.removeChild( node );
	});



	//-----
	if ( document.querySelector( '#app-sidebar-menu-style') === null ) {
		const $style = document.createElement("style");
		$style.id = 'app-sidebar-menu-style';
		document.head.appendChild($style);
		$style.innerHTML = `

			/*-- Sidebar Menu --*/
			.app-sidebar-menu {
				position: fixed;
				top: 100px;
				right: 40px;
				box-sizing: border-box;
				max-width: 200px;
				overflow: auto;
				max-height: calc(95vh - 100px);
				border-left: 1px #e5e5e5 solid;
				padding: 15px;
			}
			
			.app-sidebar-menu ul {
				margin: 0;
				padding: 0;
				list-style: none;
				font-size: .75rem;
			}
			
			.app-sidebar-menu-header {
				padding: 8px 0;
				border-bottom: 1px solid #e5e5e5;
			}
			
			.app-sidebar-menu li {
				position: relative;
				margin-bottom: .3rem;
			}
			
			.app-sidebar-menu li>a {
				display: flex;
				align-items: center;
				column-gap: .25em;
				text-decoration: none;
				color: #999;
			}
			
			.app-sidebar-menu li>a>* {
				flex: none;
			}
			
			.app-sidebar-menu li>a:focus {
				outline: none;
			}
			
			.app-sidebar-menu>li>a {
				padding: 5px 0;
			}
			
			.app-sidebar-menu li.is-active > a {
				color: #333;
			}

			@media all and (max-width: 768px) {
				.app-sidebar-menu {
					display: none;
				}
				
				.app-header-title--sidebar > a[href^="#"] {
					display: none;
				}
			}
			
		`;   
	}



	//-----
	const titleSelector = document.querySelectorAll('h3.app-header-title');

	if ( titleSelector.length > 0 ) {
		const grabAllHeaderTitle = 	Array.prototype.slice.call(titleSelector);
		const allHeaderTitleLinks = [];

		let result = grabAllHeaderTitle.filter( function(node) {
			return node.textContent.trim().length > 1;
		});


		//get DOC anchor element HTML code
		const docLink = document.querySelector( 'h1.uix-typo--h2' );
		const docLinkText = docLink.innerHTML.match(/<a.*?>(.*?)<\/a>/g)[0];
		docLink.querySelector( 'a' ).style.display = 'none';

		result.forEach( function(node, index) {

			const linkID = 'app-header-title-' + index;
			const linkTitle = node.innerHTML.replace(/<a\b[^>]*>(.*?)<\/a>/ig, '');
			const sectionID = linkID + '__section';

			
			if ( document.querySelector( '#' + linkID ) === null ) {

				//update ID
				node.id = linkID;
				node.closest( 'section' ).id = sectionID;
				
				//Create anchor element.
				const a = document.createElement('a'); 
				const link = document.createTextNode( '#' );
				a.appendChild(link); 
				a.title = linkTitle;
				a.href = '#' + sectionID; 
				a.setAttribute('style', 'float: left; margin-left: -20px; text-decoration: none; color: #9e9e9e;');
				node.prepend(a); 

				//Create DOC anchor element
				const docLinkNode = document.createElement('div');
				docLinkNode.innerHTML = docLinkText;
				node.appendChild(docLinkNode.firstChild);


				//
				node.classList.add("app-header-title--sidebar");

				

			}

			//
			allHeaderTitleLinks.push({href: '#' + sectionID, text: linkTitle});

		});




		
		
		//Create Sidebar Menu
		createSidebarMenu( allHeaderTitleLinks );


		//Highlight menu item when scrolling down to section
		const throttleFunc = throttle(highlightNavigation, 150);
		window.removeEventListener('scroll', throttleFunc);
		window.addEventListener('scroll', throttleFunc);

	}



}


export default { SidebarMenu };