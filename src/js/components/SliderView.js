import React, { PropTypes } from 'react';

const SliderView = ({ data, currentSlide, onNextSlide, onPrevSlide }) => (
  <div className='react-image-viewer-sliderView'>
    <button onClick={onPrevSlide} className='react-image-viewer-sliderButton react-image-viewer-sliderButton--prev' />
    <button onClick={onNextSlide} className='react-image-viewer-sliderButton react-image-viewer-sliderButton--next' />
    <ul>
      {data.slides.map((d, i) => (
        <li key={d.id} className={currentSlide === i ? 'react-image-viewer-slide is-current' : 'react-image-viewer-slide'}>
          <img src={d.image} alt={d.title} />
          <div className='react-image-viewer-slide-details'>
            <p>{d.details.split('\n').map(j => <span className='react-image-viewer-slide-detail'>{j}</span>)}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

SliderView.propTypes = {
  data: PropTypes.object.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onNextSlide: PropTypes.func.isRequired,
  onPrevSlide: PropTypes.func.isRequired,
};

export default SliderView;
