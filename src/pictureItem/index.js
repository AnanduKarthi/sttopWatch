import './index.css'

const PictureItem = props => {
  const {pictureList, onSelectImage} = props
  const {thumbnailUrl, id} = pictureList

  const pictureClick = () => {
    onSelectImage(id)
  }

  return (
    <li>
      <button type="button" className="button-thumb" onClick={pictureClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default PictureItem
