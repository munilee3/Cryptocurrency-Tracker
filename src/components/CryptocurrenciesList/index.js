import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const renderCrypteInfo = () => {
    const {cryptoDetails} = props
    const crypteItemsList = cryptoDetails.map(eachCrypto => (
      <CryptocurrencyItem key={eachCrypto.id} cryptoDetails={eachCrypto} />
    ))
    return crypteItemsList
  }

  return (
    <div className="tracker-container">
      <h1 className="header">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-img"
      />
      <ul className="cryptocurrency-table">
        <li className="crypto-table-headers">
          <p className="coin-type-text">Coin Type</p>
          <div className="currency-container">
            <p className="currency-type">USD</p>
            <p className="currency-type">EURO</p>
          </div>
        </li>
        {renderCrypteInfo()}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
