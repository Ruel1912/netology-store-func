const ShopItemFunc = ({ item }) => {
  const {brand, title, description, descriptionFull, price, currency} = item 

  return (
    <div class="main-content">
      <h2>{brand ?? 'Производитель'}</h2>
      <h1>{title ?? 'Название товара'}</h1>
      <h3>{description ?? 'Краткое описание'}</h3>
      <div class="description">{descriptionFull ?? 'Описание товара'}</div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{currency}{price.toFixed(2) ?? 0}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ShopItemFunc