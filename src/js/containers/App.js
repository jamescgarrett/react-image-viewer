import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/data';
import { updateUi } from '../actions/ui';
import { slide } from '../actions/slider';

import { Images } from '../components';

class App extends Component {

  static propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.object,
    viewStatus: PropTypes.string,
    currentSlide: PropTypes.number,
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    this.props.dispatch(getData());
  }

  _handleViewToggle(view) {
    this.props.dispatch(updateUi(view));
  }

  _handleNextSlide(current) {
    const { data } = this.props;
    this.props.dispatch(slide(data.length, current, 'next'));
  }

  _handlePrevSlide(current) {
    const { data } = this.props;
    this.props.dispatch(slide(data.length, current, 'prev'));
  }

  render() {
    const {
      isLoading,
      error,
      data,
      viewStatus,
      currentSlide,
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
            onNextSlide={current => this._handleNextSlide(current)}
            onPrevSlide={current => this._handlePrevSlide(current)}
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
});

export default connect(mapStateToProps)(App);
