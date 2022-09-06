import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const [addGreen, setAddGreen] = React.useState(false);
  const onAddCart = () => {
    setAddGreen(true);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={props.onAddFavorite} src="/img/unlike.svg" alt="Liked" />
      </div>
      <img width={133} height={112} src={props.image} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between aline-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
