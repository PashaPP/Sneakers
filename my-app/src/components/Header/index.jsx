import React from 'react';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">sneakers-test-react</h3>
          <p className="opacity-5">Магазин кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.openCart} className="mr-20 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="logo" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="logo" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
