import PropTypes from 'prop-types';

const ShopItemFunc = ({ item }) => {
  const {brand, title, description, descriptionFull, price, currency} = item;

  ShopItemFunc.propTypes = {
    item: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired
  };

  return (
    <div className="main-content">
      <h2>{brand ?? 'Производитель'}</h2>
      <h1>{title ?? 'Название товара'}</h1>
      <h3>{description ?? 'Краткое описание'}</h3>
      <div className="description">{descriptionFull ?? 'Описание товара'}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency}{price.toFixed(2) ?? 0}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ShopItemFunc