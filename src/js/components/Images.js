import React, { Component, PropTypes } from 'react';

import {
  ListView,
  SliderView,
} from './';

export default class Images extends Component {

  static propTypes = {
    onToggleView: PropTypes.func.isRequired,
    onNextSlide: PropTypes.func.isRequired,
    onPrevSlide: PropTypes.func.isRequired,
    viewStatus: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    currentSlide: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._handleViewToggle = this._handleViewToggle.bind(this);
    this._handleNextSlide = this._handleNextSlide.bind(this);
    this._handlePrevSlide = this._handlePrevSlide.bind(this);
  }

  _handleViewToggle() {
    const { viewStatus, onToggleView } = this.props;
    onToggleView(viewStatus);
  }

  _handleNextSlide() {
    const { onNextSlide, currentSlide } = this.props;
    onNextSlide(currentSlide);
  }

  _handlePrevSlide() {
    const { onPrevSlide, currentSlide } = this.props;
    onPrevSlide(currentSlide);
  }

  render() {
    const {
      data,
      viewStatus,
      currentSlide,
    } = this.props;
    return (
      <div className='react-image-viewer-images'>
        <button onClick={this._handleViewToggle} className='react-image-viewer-toggle'><i className='fa fa-picture-o fa-2x' /></button>

        {viewStatus === 'list' &&
          <ListView data={data} />
        }
        {viewStatus === 'slider' &&
          <SliderView
            data={data}
            currentSlide={currentSlide}
            onNextSlide={this._handleNextSlide}
            onPrevSlide={this._handlePrevSlide}
          />
        }
      </div>
    );
  }
}
