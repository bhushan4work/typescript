
import { type ReactNode } from "react";

//we use generics here
interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode

}
//in order to recognize generics by ts ,we used ',' with T
const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}> {render(item)} </li> //we render each item here & provide diff keys with index i
            ))}
        </ul>
    )
}

export default List