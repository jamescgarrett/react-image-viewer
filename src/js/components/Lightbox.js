import React, { PropTypes } from 'react';

const Lightbox = ({ uri, onLightboxClose, onContextMenu }) => (
  <div className='modal is-active'>
    <div onClick={onLightboxClose} className='modal-background' />
    <div className='modal-content'>
      <p className='image'>
        <img onContextMenu={onContextMenu} src={uri} alt='Harrington Sculpture' />
      </p>
    </div>
    <button onClick={onLightboxClose} className='modal-close' />
  </div>
);

Lightbox.propTypes = {
  uri: PropTypes.string.isRequired,
  onLightboxClose: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func.isRequired,
};

export default Lightbox;
