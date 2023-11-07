// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li className="columItems">
      <img alt={name} className="image" src={imgUrl} />
      <p className="head">{name}</p>
    </li>
  )
}

export default DestinationItem
