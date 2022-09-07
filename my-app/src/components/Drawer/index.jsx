import React from 'react';

function Drawer({ closeCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between ">
          Корзина{' '}
          <img
            onClick={closeCart}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Plus"
          />
        </h2>
        <div className="items">
          {items.map((object) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${object.imageUrl})` }}
                className="cartItemImg"></div>

              <div className="mr-20">
                <p className="mb-5">{object.title}</p>
                <b>{object.price} руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Plus" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
