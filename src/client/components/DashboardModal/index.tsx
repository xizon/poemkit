/* 
 *************************************
 * <!-- Dashboard Modal -->
 *************************************
 */
 import React from 'react';

 /*-- Apply Third-party plugins (import location should be in front of "GLOBAL STYLES") --*/
 import '@/components/_plugins/_lib-bootstrap';
 import '@/components/_plugins/_lib-icons';
 
 /*-- Apply global scripts and styles --*/
 import '@/components/_utils/styles/_all.scss';
 import '@/components/_utils/styles/rtl/_all.scss';
 import { __ } from '@/components/_utils/_all';
 

/*-- Apply this component styles --*/
import '@/components/DashboardModal/styles/_style.scss';

type CallbackFnType = () => void;
type DetailFnType = (arg: any) => void;

type DashboardModalProps = {
  modalId: string;
  targetId: number;
  show?: boolean;
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  showClickEvent?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | CallbackFnType | any;
  closeClickEvent?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | CallbackFnType | any;
  /** The method to call when a page is clicked. Exposes the current ID as an argument. */
  gotoIdClickEvent?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | DetailFnType | any;
};


export default function DashboardModal(props: DashboardModalProps) {

  const {
    show,
    modalId,
    targetId,
    title,
    content,
    showClickEvent,
    closeClickEvent,
    gotoIdClickEvent
  } = props;


  function handleShow(e) {
    e.preventDefault();

    if ( typeof gotoIdClickEvent === 'function' ) {
      gotoIdClickEvent(targetId);
    }

    if ( typeof showClickEvent === 'function' ) {
      showClickEvent();
    }

  }


  function handleClose(e) {
    e.preventDefault();
    e.stopPropagation();

    if ( typeof closeClickEvent === 'function' ) {
      closeClickEvent();
    }
  }



  return (
    <>

      <a className="poemkit-db-modal__trigger" href="#" onClick={handleShow}>{title}</a>

      <div
        id={modalId}
        className="poemkit-db-modal"
        onClick={handleClose}
        style={{ display: show ? 'flex' : 'none' }}>

        <div className="poemkit-db-modal__content" onClick={(e) => e.stopPropagation()}>
          <a href="#"
            className="poemkit-db-modal__close"
            onClick={handleClose}>&times;
          </a>

          <div className="poemkit-db-modal__flex">
            <div>{content}</div>
          </div>

        </div>

      </div>

    </>
  )

}

