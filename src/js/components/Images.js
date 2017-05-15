import React, { Component, PropTypes } from 'react';

import {
  ListView,
  SliderView,
  Lightbox,
} from './';

export default class Images extends Component {

  static propTypes = {
    onToggleView: PropTypes.func.isRequired,
    onNextSlide: PropTypes.func.isRequired,
    onPrevSlide: PropTypes.func.isRequired,
    viewStatus: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    currentSlide: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
    onLightboxClose: PropTypes.func.isRequired,
    lightboxOpen: PropTypes.bool.isRequired,
    lightboxUri: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this._handleViewToggle = this._handleViewToggle.bind(this);
    this._handleImageClick = this._handleImageClick.bind(this);
    this._handleLightboxClose = this._handleLightboxClose.bind(this);
    this._handleContextMenu = this._handleContextMenu.bind(this);
  }

  _handleViewToggle() {
    const { viewStatus, onToggleView } = this.props;
    onToggleView(viewStatus);
  }

  _handleImageClick(uri) {
    const { onImageClick } = this.props;
    onImageClick(uri);
  }

  _handleLightboxClose() {
    const { onLightboxClose } = this.props;
    onLightboxClose();
  }

  _handleContextMenu(e) { // eslint-disable-line class-methods-use-this
    e.preventDefault();
  }

  render() {
    const {
      data,
      viewStatus,
      currentSlide,
      lightboxOpen,
      lightboxUri,
      onNextSlide,
      onPrevSlide,
    } = this.props;
    return (
      <div className='react-image-viewer-images'>
        <div className='react-image-viewer-actions is-clearfix'>
          {viewStatus === 'slider' &&
            <div className='react-image-viewer-sliderButtons is-pulled-left'>
              <button onClick={() => onNextSlide()} className='react-image-viewer-sliderButton react-image-viewer-sliderButton--next'><i className='fa fa-angle-right' /></button>
              <button onClick={() => onPrevSlide()} className='react-image-viewer-sliderButton react-image-viewer-sliderButton--prev'><i className='fa fa-angle-left' /></button>
            </div>
          }
          <button onClick={this._handleViewToggle} className='react-image-viewer-toggle is-pulled-right'>
            <i className={viewStatus === 'slider' ? 'fa fa-th-large fa-2x' : 'fa fa-square fa-2x'} />
          </button>
        </div>

        {viewStatus === 'list' &&
          <ListView
            data={data}
            onImageClick={this._handleImageClick}
            onContextMenu={this._handleContextMenu}
          />
        }
        {viewStatus === 'slider' &&
          <SliderView
            data={data}
            currentSlide={currentSlide}
            onNextSlide={this._handleNextSlide}
            onPrevSlide={this._handlePrevSlide}
            onImageClick={this._handleImageClick}
            onContextMenu={this._handleContextMenu}
          />
        }

        {lightboxOpen &&
          <Lightbox
            uri={lightboxUri}
            onLightboxClose={this._handleLightboxClose}
            onContextMenu={this._handleContextMenu}
          />
        }
      </div>
    );
  }
}
