import React, { PropTypes } from 'react';

const ListView = ({ data }) => (
  <div className='react-image-viewer-listView'>
    <ul>
      {data.slides.map(d => (
        <li key={d.id} className='react-image-viewer-listItem'>
          <img src={d.image} alt={d.imageTitle} />
        </li>
      ))}
    </ul>
  </div>
);

ListView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ListView;
