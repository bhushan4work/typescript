import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"


export function Store() {
    return <>
        <h1>Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {storeItems.map((item) => (
                <div key={item.id}  className="grid grid-cols-6 md:grid-cols-1 gap-3 ">
                    <pre> <StoreItem  {...item} /> </pre>
                </div>
            ))}
        </div>
    </>
}

