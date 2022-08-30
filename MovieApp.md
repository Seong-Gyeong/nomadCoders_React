### then을 사용하지 않고 async-await을 이용할 수 있다

[전- then 이용]

```
useEffect(() => {
    fetch(
      "https://yts.mx/apihttps://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false); //로딩을 끝냈다는 표지
      });
  }, []);
```

[후 - async-await 이용]

```
const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/apihttps://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json;
    //const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
```

#

### 리스트의 요소를 화면에 paint하기 위한 방법

### $\rightarrow$ map

- 이전 배열을 가져가서 그 배열의 각각의 item을 변형시킴
- 고유한 key를 가져야함

Example

```
[1,2,3,4,5,6].map(x => x*2)
>> [2,4,6,8,10,12]
```

```
return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )}
    </div>
  );
```
