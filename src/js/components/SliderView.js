import React, { Component, PropTypes } from 'react';

export default class SliderView extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    currentSlide: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
    onContextMenu: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this._handleImageClick = this._handleImageClick.bind(this);
  }

  _handleImageClick(uri) {
    const { onImageClick } = this.props;
    onImageClick(uri);
  }

  render() {
    const {
      data,
      currentSlide,
      onContextMenu,
    } = this.props;
    return (
      <div className='react-image-viewer-sliderView'>
        <ul>
          {data.slides.map((d, i) => (
            <li key={d.id} className={currentSlide === i ? 'react-image-viewer-slide is-current' : 'react-image-viewer-slide'}>
              <button onClick={() => this._handleImageClick(d.image)}>
                <img onContextMenu={onContextMenu} src={d.image} alt={d.title} />
              </button>
              {d.details &&
                <div className='react-image-viewer-slide-details'>
                  <p>{d.details.split('\n').map(j => <span key={`${j}`} className='react-image-viewer-slide-detail'>{j}</span>)}</p>
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
