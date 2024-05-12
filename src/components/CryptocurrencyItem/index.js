import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails
  return (
    <li className="crypto-table-headers">
      <div className="crypto-name-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="crypto-currency-img"
        />
        <p className="currency-name-text">{currencyName}</p>
      </div>
      <div className="currency-container">
        <p className="usd">{usdValue}</p>
        <p className="usd">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
