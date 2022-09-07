import React from 'react';
import styles from './Card.module.scss';

function Card({ onAddFavorite, image, title, price, onPlus }) {
  const [addGreen, setAddGreen] = React.useState(false);
  const onAddCart = () => {
    onPlus({ image, title, price });
    setAddGreen(!addGreen);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={onAddFavorite} src="/img/unlike.svg" alt="Liked" />
      </div>
      <img width={133} height={112} src={image} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between aline-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onAddCart}
          src={addGreen ? '/img/btn-plus-green.svg' : '/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
