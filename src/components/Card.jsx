export function Card({ item , onClickgrid})
{
    return (
        <div 
        onClick={()=>onClickgrid(item)}
        className={`${item.className} max-w-xl h-30 cursor-pointer transform transition hover:scale-105`}>
            <div className="p-8">
                <div className="text-2xl font-bold mb-5">{item.title}</div>
                <div className="font-semibold underline underline-offset-4">SHOP NOW +</div>
            </div>
            <img className=" absolute h-40 w-50 top-5 left-[40%]" 
            src={item.src}/>
        </div>
    );
}