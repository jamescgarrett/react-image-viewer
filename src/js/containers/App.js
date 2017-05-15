import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/data';
import { updateUi } from '../actions/ui';
import { updateLightbox, closeLightbox } from '../actions/lightbox';
import { slide } from '../actions/slider';

import { Images } from '../components';

class App extends Component {

  static propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.object,
    viewStatus: PropTypes.string,
    currentSlide: PropTypes.number,
    lightboxOpen: PropTypes.bool,
    lightboxUri: PropTypes.string,
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    this.props.dispatch(getData());
  }

  _handleViewToggle(view) {
    this.props.dispatch(updateUi(view));
  }

  _handleNextSlide() {
    const { data, currentSlide } = this.props;
    this.props.dispatch(slide(data.slides.length, currentSlide, 'next'));
  }

  _handlePrevSlide() {
    const { data, currentSlide } = this.props;
    this.props.dispatch(slide(data.length, currentSlide, 'prev'));
  }

  _handleImageClick(uri) {
    const { lightboxOpen } = this.props;
    this.props.dispatch(updateLightbox(uri, lightboxOpen));
  }

  _handleLightboxClose() {
    this.props.dispatch(closeLightbox());
  }

  render() {
    const {
      isLoading,
      error,
      data,
      viewStatus,
      currentSlide,
      lightboxOpen,
      lightboxUri,
    } = this.props;
    return (
      <div className='react-image-viewer'>
        <p className='react-image-viewer-error'>{error ? error : ''}</p>
        {isLoading &&
          <div>
            <span className='react-image-viewer-loading'><i className='fa fa-2x fa-spinner fa-pulse' /></span>
          </div>
        }

        {!isLoading && data != null &&
          <Images
            data={data}
            viewStatus={viewStatus}
            currentSlide={currentSlide}
            onToggleView={view => this._handleViewToggle(view)}
            onNextSlide={() => this._handleNextSlide()}
            onPrevSlide={() => this._handlePrevSlide()}
            onImageClick={uri => this._handleImageClick(uri)}
            onLightboxClose={() => this._handleLightboxClose()}
            lightboxOpen={lightboxOpen}
            lightboxUri={lightboxUri}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  error: state.data.error,
  data: state.data.data,
  viewStatus: state.ui.viewStatus,
  currentSlide: state.slider.currentSlide,
  lightboxOpen: state.lightbox.open,
  lightboxUri: state.lightbox.uri,
});

export default connect(mapStateToProps)(App);
