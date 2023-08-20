
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map((good => (
                <GoodsItem key={GoodsItem.mainId} {...good}/>
            )))}
        </div>
    )
}

export {GoodsList}