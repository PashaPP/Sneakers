import React from 'react';
import axios from 'axios';
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
  const clearSearch = () => {
    setSearchValue('');
  };

  React.useEffect(() => {
    axios.get('https://63183b95f6b281877c668459.mockapi.io/items').then((res) => {
      setItemsSneakers(res.data);
    });
    axios.get('https://63183b95f6b281877c668459.mockapi.io/cart').then((res) => {
      setCartItemsSneakers(res.data);
    });
  }, []);

  const onAdToCart = (obj) => {
    axios.post('https://63183b95f6b281877c668459.mockapi.io/cart', obj);
    setCartItemsSneakers((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63183b95f6b281877c668459.mockapi.io/cart${id}`);
    setCartItemsSneakers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          items={cartItemsSneakers}
          closeCart={() => setCartOpen(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header openCart={() => setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>

          <div className="search-block">
            <img width={15} height={15} src="img/searchIcon.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={clearSearch}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {itemsSneakers
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.index}
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                onAddFavorite={() => console.log('Добавили в закладки]')}
                onPlus={(obj) => onAdToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
