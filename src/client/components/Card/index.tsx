/* 
 *************************************
 * <!-- Card -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

/*-- Apply this component styles --*/
import '@poemkit/components/Card/styles/_style.scss';



// Specify a background image
import { setBG } from '@poemkit/components/_utils/_all';


interface CardBgConfig {
	scr?: string | undefined;
	height?: string | boolean | undefined;
	width?: string | boolean | undefined;
	position?: string | undefined;
	size?: string | undefined;
	repeat?: string | undefined;
	fill?: boolean | undefined;
	move?: {
		[key: string]: string | number | boolean | undefined;
	};
}

type CardProps = {
	/** Card display style */
	type: string;
	/** Button Icon */
	btnIcon?: React.ReactNode;
	/** Handling events for button */
	btnClickEvent?: React.MouseEventHandler<HTMLButtonElement>;
	btnHyperlinkClickEvent?: React.MouseEventHandler<HTMLAnchorElement>;
	/** Title of card */
	title?: string | null;
	/** Omit overflowed title string */
	titleEllipsis?: boolean | null;
	/** Hyperlink or subtitle of card */
	subTitle?: React.ReactNode | string;
	/** The attributes of the background image, use JSON string */
	bgConfig?: string | null | CardBgConfig;

	/** //////////// */
	/** The ratio of the content, used for horizontal gallery style. For `gallery-h-*`, `gallery-full-*`  */
	contentRatio?: number | null;
	/** Primary Icon. For `gallery-icon-*` */
	icon?: React.ReactNode;
	/** Overlay the content on the card background. For `gallery-v-*` */
	overlayArea?: React.ReactNode;
	/** Vertically center text. For `gallery-full-*` */
	verticalCenter?: boolean | null;
	/** Avatar URL. For `thumb`, `authorcard-*` */
	avatar?: string | null;
	/** -- */
	id?: string;
};
type CardState = false;



export default class Card extends Component<CardProps, CardState> {

	uniqueID: string;
	
	constructor(props) {
		super(props);
		
		this.uniqueID = 'app-' + __.GUID.create();
	}

	render() {

		const {
			btnIcon,
			btnClickEvent,
			btnHyperlinkClickEvent,
			title,
			titleEllipsis,
			subTitle,
			type,
			bgConfig,
			contentRatio,
			icon,
			overlayArea,
			verticalCenter,
			avatar,
			id,
			children
		} = this.props;

		//set ID
		const cid = id || this.uniqueID;

		//title
		const _title = title || '';

		//sub title
		const _subTitle = subTitle || '';

		//button icon
		const _btnIcon = btnIcon || '';

		//get background config
		let _bgConfig: any = (bgConfig === null || bgConfig === undefined) ? false : bgConfig;
		if ( __.validate.isJSON(_bgConfig) ) {
			_bgConfig = (Object.prototype.toString.call(_bgConfig) === '[object Object]') ? _bgConfig : JSON.parse(_bgConfig as string);
		}
		
		const _bgStyles = setBG(_bgConfig);

		//avatar (`thumb`, `authorcard-*`)
		const _avatar = avatar || '';


		//ratio of the content (`gallery-h-*`, `gallery-full-*`)
		const _contentRatio = contentRatio || 8;

		//primary icon (`gallery-icon-*`)
		const _icon = icon || '';

		//overlay area (`gallery-v-*`)
		const _overlayArea = overlayArea || '';


		//return HTML structure
		let res: any = null;
		let typeRes = type ? type : '';

		switch (typeRes) {
			case 'thumb':
				res = (
					<>

						<div id={cid} className="poemkit-card--thumb">
							<div className="poemkit-card--thumb__header">
								<div className="poemkit-card--thumb__preview" style={{ flexBasis: "50px" }}>
									{/*<!-- image begin -->*/}
									<img src={_avatar} alt="" className="poemkit-border--circle" />
									{/*<!-- image end -->*/}
								</div>

								<div className="poemkit-card--thumb__content">
									<div className="poemkit-card--thumb__content__child">
										<div className="poemkit-card--thumb__content__child--left">
											<div>
												{/*<!-- content begin -->*/}

												<h5 className={titleEllipsis ? 'poemkit-t-ellipsis poemkit-spacing--no' : 'poemkit-relative--inline poemkit-spacing--no'}>{_title}</h5>

												{_subTitle !== '' ? <><small className="poemkit-typo--color-sub">{_subTitle}</small></> : ''}
												{/*<!-- content end -->*/}
											</div>
										</div>
										<div className="poemkit-card--thumb__content__child--right" style={{ minWidth: "50px", textAlign: "right" }}>
											{/*<!-- content begin -->*/}

											{_btnIcon !== '' ? <><button aria-haspopup="true" onClick={btnClickEvent}>{_btnIcon}</button></> : ''}

											{/*<!-- content end -->*/}
										</div>
									</div>

								</div>

							</div>

							<div className="poemkit-card--thumb__body">
								{/*<!-- content begin -->*/}
								<small className="poemkit-typo--color-sub">
									{children}
								</small>
								{/*<!-- content end -->*/}
							</div>
						</div>

					</>
				);
				break;
			case 'gallery-v-img':
				res = (
					<>

						<div id={cid} className="poemkit-card--gallery" role="figure">
							<div className="poemkit-card--gallery__preview">
								{/*<!-- image begin -->*/}
								<img src={_bgConfig.src} alt="" />
								{/*<!-- image end -->*/}

								{/*<!-- overlay area begin -->*/}
								{_overlayArea}
								{/*<!-- overlay area end -->*/}


							</div>
							<div className="poemkit-card--gallery__body">
								<div className="poemkit-card--gallery__header">
									<div className="poemkit-card--gallery__header__child">
										{/*<!-- content begin -->*/}
										<h5 className={titleEllipsis ? 'poemkit-t-ellipsis' : 'poemkit-relative--inline'} style={{ margin: "10px", paddingBottom: 0 }}>{_title}&nbsp;&nbsp;</h5>

										{_subTitle !== '' ? <><small className="poemkit-typo--color-sub">{_subTitle}</small></> : ''}

										<div className="poemkit-card--gallery__action" style={{ margin: "10px" }}>
											{_btnIcon !== '' ? <><button aria-haspopup="true" onClick={btnClickEvent}>{_btnIcon}</button></> : ''}
										</div>
										{/*<!-- content end -->*/}
									</div>
								</div>
							</div>
						</div>

					</>
				);
				break;
			case 'gallery-v-custom':
				res = (
					<>

						<div id={cid} className="poemkit-card--gallery" role="figure">
							<div className="poemkit-card--gallery__preview">
								{/*<!-- image begin -->*/}
								<img src={_bgConfig.src} alt="" />
								{/*<!-- image end -->*/}

								{/*<!-- overlay area begin -->*/}
								{_overlayArea}
								{/*<!-- overlay area end -->*/}


							</div>
							<div className="poemkit-card--gallery__body">
								<div className="poemkit-card--gallery__header">
									<div className="poemkit-card--gallery__header__child">
										{/*<!-- content begin -->*/}
										{children}
										{/*<!-- content end -->*/}

									</div>

								</div>
							</div>
						</div>

					</>
				);
				break;
			case 'gallery-h-img':
				res = (
					<>


						<div id={cid} className="poemkit-card--gallery poemkit-card--gallery--horizontal" role="figure">
							<div className={`poemkit-card--gallery__preview poemkit-card--gallery__grid__col-${_contentRatio} poemkit-card--gallery__preview--mobile-stack`} style={_bgStyles}>
								{/*<!-- image begin -->*/}
								<img src={_bgConfig.src} alt="" />
								{/*<!-- image end -->*/}

							</div>
							<div className="poemkit-card--gallery__body">
								<div className="poemkit-card--gallery__header">
									<div className="poemkit-card--gallery__header__child">
										{/*<!-- content begin -->*/}
										{children}
										{/*<!-- content end -->*/}

									</div>

								</div>
							</div>
						</div>
					</>
				);
				break;
			case 'gallery-full-info':
				res = (
					<>

						<div id={cid} className="poemkit-card--gallery poemkit-card--gallery--overlay" role="figure">
							<div className="poemkit-card--gallery__preview">
								{/*<!-- image begin -->*/}
								<img src={_bgConfig.src} alt="" />
								{/*<!-- image end -->*/}

							</div>
							<div className={`poemkit-card--gallery__body ${verticalCenter ? 'poemkit-card--gallery__body--verticalCenter' : ''} poemkit-card--gallery__grid__col-${_contentRatio} poemkit-card--gallery__preview--mobile-stack`}>
								<div className="poemkit-card--gallery__header">
									<div className="poemkit-card--gallery__header__child">
										{/*<!-- content begin -->*/}
										{children}
										{/*<!-- content end -->*/}

									</div>

								</div>
							</div>
						</div>

					</>
				);
				break;
			case 'gallery-icon':
				res = (
					<>

						<div id={cid} className="poemkit-card--gallery poemkit-card--gallery--horizontal is-mobile-still" role="figure">
							<div className="poemkit-card--gallery__preview" style={{ padding: "25px", background: "#EAEAEA" }}>
								{/*<!-- image begin -->*/}
								{_icon}
								{/*<!-- image end -->*/}

							</div>
							<div className="poemkit-card--gallery__body">
								<div className="poemkit-card--gallery__header">
									<div className="poemkit-card--gallery__header__child">
										{/*<!-- content begin -->*/}
										<span style={{ margin: "0 10px 10px", display: "block" }}>
											<h5 className={titleEllipsis ? 'poemkit-t-ellipsis' : ''} style={{ margin: "10px", marginLeft: 0, marginBottom: 0, paddingBottom: 0 }}>{_title}</h5>
											{_subTitle !== '' ? <><small className="poemkit-typo--color-sub">{_subTitle}</small></> : ''}

											{_btnIcon !== '' ? <><div className="poemkit-card--gallery__action" style={{ margin: "10px" }}><button aria-haspopup="true" onClick={btnClickEvent}>{_btnIcon}</button></div></> : ''}

										</span>
										{/*<!-- content end -->*/}

									</div>

								</div>
							</div>
						</div>

					</>
				);
				break;
			case 'gallery-icon-abreast':
				res = (
					<>

						<div id={cid} className="poemkit-card--gallery poemkit-card--gallery--horizontal is-mobile-still" role="figure">
							<div className="poemkit-card--gallery__preview" style={{ padding: "25px", background: "#EAEAEA" }}>
								{/*<!-- image begin -->*/}
								{_icon}
								{/*<!-- image end -->*/}

							</div>
							<div className="poemkit-card--gallery__body">

								<div className="poemkit-card--gallery__content">
									<div className="poemkit-card--gallery__content__child">
										<div className="poemkit-card--gallery__content__child--left">
											<div>
												{/*<!-- content begin -->*/}
												<span style={{ margin: "0 10px 10px", display: "block" }}>
													<h5 className={titleEllipsis ? 'poemkit-t-ellipsis' : ''} style={{ margin: "10px", marginLeft: 0, marginBottom: 0, paddingBottom: 0 }}>{_title}</h5>
													{_subTitle !== '' ? <><small className="poemkit-typo--color-sub">{_subTitle}</small></> : ''}
												</span>
												{/*<!-- content end -->*/}
											</div>
										</div>


										{_btnIcon !== '' ? <>
											<div className="poemkit-card--gallery__content__child--right" style={{ minWidth: "50px" }}>
												{/*<!-- content begin -->*/}
												<div className="poemkit-card--gallery__action" style={{ margin: "10px" }}>
													<button aria-haspopup="true" onClick={btnClickEvent}>{_btnIcon}</button>
												</div>
												{/*<!-- content end -->*/}
											</div>
										</> : ''}

									</div>

								</div>

							</div>
						</div>

					</>
				);
				break;
			case 'authorcard-line':
				res = (
					<>

						<div id={cid} className="poemkit-card--author">
							<div className="poemkit-card--author__header">
								<div className="poemkit-card--author__text poemkit-f-l">
									<h3 className={titleEllipsis ? 'poemkit-t-ellipsis' : ''}>{_title}</h3>
									{_subTitle !== '' ? <>{_subTitle}</> : ''}
								</div>
								<div className="poemkit-card--author__preview poemkit-border--circle poemkit-border--circle-only-img poemkit-f-r">
									<img src={_avatar} alt="" className="poemkit-border--circle" />
								</div>
							</div>
							<div className="poemkit-card--author__content">
								{children}
							</div>
							{_btnIcon !== '' ? <><a role="button" className="poemkit-card--author__jump" onClick={btnHyperlinkClickEvent}>{_btnIcon}</a></> : ''}
						</div>

					</>
				);
				break;
			case 'authorcard-detail':
				res = (
					<>

						<div id={cid} className="poemkit-card--author poemkit-card--author--noborder poemkit-t-c">
							<div className="poemkit-card--author__header">

								<div className="poemkit-card--author__preview poemkit-border--circle poemkit-border--circle-only-img">
									<img src={_avatar} alt="" className="poemkit-border--circle" />
								</div>

							</div>
							<div className="poemkit-card--author__content poemkit-card--author__content--rounded">
								<h4 className={titleEllipsis ? 'poemkit-t-ellipsis poemkit-t-c poemkit-spacing--no' : 'poemkit-t-c poemkit-spacing--no'}>{_title}</h4>
								{_subTitle !== '' ? <>{_subTitle}</> : ''}
								{children}
							</div>


						</div>

					</>
				);
				break;
			case 'authorcard-stats':
				res = (
					<>
						<div id={cid} className="poemkit-card--author poemkit-card--author--noborder poemkit-card--author--stats">
							<div className="poemkit-card--author__header">

								<div className="poemkit-card--author__preview poemkit-card--author__preview--rounded poemkit-card--author__preview--jumpOut">
									<img src={_avatar} alt="" />
								</div>

							</div>
							<div className="poemkit-card--author__content poemkit-card--author__content--rounded  poemkit-t-r">
								{children}
							</div>


						</div>

					</>
				);
				break;


		}

		return (
			<>
				{res}
			</>
		)
	}
}
