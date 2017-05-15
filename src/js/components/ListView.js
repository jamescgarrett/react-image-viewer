import React, { PropTypes, Component } from 'react';

export default class ListView extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
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
      onContextMenu,
    } = this.props;
    return (
      <div className='react-image-viewer-listView'>
        <ul>
          {data.slides.map(d => (
            <li key={d.id} className='react-image-viewer-listItem'>
              <button onClick={() => this._handleImageClick(d.image)}>
                <img onContextMenu={onContextMenu} src={d.image} alt={d.imageTitle} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
