function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //첫 렌더링 때 즉시 실행하고 싶다
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //빈 배열이면 이 코드는 한 번만 작동됨
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbols}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
