import { Card } from "./Card";
export function NewArrivalSection ({ items, onClickCard })
{
    return(
        <div className="flex-center mt-20">
            <div className="bg-[url('./assets/lines.png')] bg-center max-w-full text-4xl text-center font-extrabold">NEW ARRIVALS</div>
            <div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
                {
                items.map((items)=>(
                    <Card key={items.id} item={items} onClickgrid={onClickCard}/>
                ))
            }
                </div>
            </div>
        </div>
    );
}