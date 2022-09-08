import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [itemsSneakers, setItemsSneakers] = React.useState([]);
  const [cartItemsSneakers, setCartItemsSneakers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAdToCart = (obj) => {
    setCartItemsSneakers((prev) => [...prev, obj]);
  };

  React.useEffect(() => {
    fetch('https://63183b95f6b281877c668459.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItemsSneakers(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpen && <Drawer items={cartItemsSneakers} closeCart={() => setCartOpen(false)} />}
      <Header openCart={() => setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={15} height={15} src="img/searchIcon.svg" alt="Search" />
            <img className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />
            <input onChange={onChangeSearchInput} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {itemsSneakers.map((item) => (
            <Card
              key={item.imageUrl}
              title={item.title}
              price={item.price}
              image={item.imageUrl}
              onAddFavorite={() => console.log('Добавили в закладки]')}
              onPlus={(obj) => onAdToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
