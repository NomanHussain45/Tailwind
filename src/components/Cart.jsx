import { Cartitem } from "./Cartitem";

export function Cart({ cartitems })
{
    return(
        <>
            <h2 className="mb-10 text-4xl font-blod p-4"> Cart </h2>
            <ul className="space-y-5">
                {cartitems.map((cartitem) => (
                <li key={cartitem.product.id}>
                    <Cartitem item={cartitem}/>
                </li>
            ))}
            </ul>
        </>
    );
}