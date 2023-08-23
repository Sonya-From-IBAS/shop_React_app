function GoodsItem(props) {
    const {addToBasket = Function.prototype} = props;
    return (
        <div className="card" >
            <div className="card-image">
                <img src={props.displayAssets[0].full_background} alt={props.displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{props.displayName}</span>
                <p>
                    {props.displayDescription}
                </p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToBasket({
                    id:props.mainId,
                    name: props.displayName,
                    price: props.price.finalPrice
                })}>Купить</button>
                <span className="right">{props.price.finalPrice} Рублей</span>
            </div>
        </div>
    );
}

export { GoodsItem };


