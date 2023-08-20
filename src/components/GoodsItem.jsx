function GoodsItem(props) {
    return (
        <div className="card" id={props.mainId}>
            <div className="card-image">
                <img src={props.displayAssets[0].full_background} alt={props.displayName} />
                <span className="card-title">{props.displayName}</span>
            </div>
            <div className="card-content">
                <p>
                    {props.displayDescription}
                </p>
            </div>
            <div className="card-action">
                <button className='btn'>Купить</button>
                <span className="right">{props.price.regularPrice}</span>
            </div>
        </div>
    );
}

export { GoodsItem };


