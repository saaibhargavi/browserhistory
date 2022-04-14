import './index.css'

const HistoryItem = props => {
  const {Historydetails, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onClickdelete = () => {
    deleteList(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="logourl-container">
        <p>{logoUrl}</p>
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={onClickdelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
