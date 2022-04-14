import {Component} from 'react'

import historyItem from '../historyItem'

import './index.css'

class Historyview extends Component {
  state = {
    searchInput: '',
    HistoryList: initialHistoryList,
  }

  deleteList = id => {
    const {searchInput} = this.state
    const updatedList = HistoryList.filter(eachList => eachList.id !== id)
    this.setState({
      searchInput: updatedList,
    })
  }

  onChangesearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, HistoryList} = this.state

    const searchResults = HistoryList.filter(eachhistory =>
      eachhistory.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="search-logo"
            />
            <input
              type="text"
              className="input-search"
              placeholder="EnterText"
              onChange={this.onChangesearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <ul>
          {searchResults.map(eachitem => (
            <historyItem
              key={eachitem.id}
              Historydetails={eachitem}
              deleteList={this.deleteList}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Historyview
