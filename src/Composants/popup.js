import React from 'react';
import './popup.css'
import CloseIcon from '@material-ui/icons/Close';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" style={{color:"white"}}>
              <CloseIcon className="close-btn-help" onClick={()=> props.setTrigger(false)}/>
                { props.children }

            </div>
        </div>
    ) : "";
}

export default Popup