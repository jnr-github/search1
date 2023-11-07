import './index.css'

import {DestinationItem} from '../DestinationItem'

import {Component} from 'react'

class DestinationItem extends Component {
  state = {searchInput: ''}

  inputElement = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchList = destinationList.filter(each =>
      each.name.toLowerCase().includes(searchList.toLowerCase()),
    )
    return (
      <div className="main-background">
        <h1 className="heading">Destination Search</h1>
        <input
          onChange={this.inputElement}
          type="search"
          placeholder="Search"
          value={searchInput}
        />
        <img
          alt="search icon"
          className="searchImage"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        />
        <ul>
          {searchList.map(each => {
            ;<DestinationItem destinationDetails={each} key={each.id} />
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
