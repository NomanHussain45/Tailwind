import { QTY, SIZES } from "../constant";
import { Select } from "./Select";
export function ShoeDetails({shoe, onClickAdd})
{
    return (
        <div className="flex flex-col lg:flex-row-reverse">
            {/* Shoe Image*/}
           <div className="flex-1 lg:-mt-32 lg:ml-30">
            <div className="flex-center h-full from- bg-gradient-to-br from-[#cf2222] from-5% via-[#e96b55] to-[#d9562c]">
            <img className="animate-float " src={shoe.src}/>
            </div>
           </div>
           <div className="flex-1 space-y-6">
            {/* Shoe Details */}
                <div className="text-4xl font-black md:text-9xl">
                    {shoe.title}
                </div>
                <div className="font-small md:text-xl">
                    {shoe.description}
                </div>
                <div className="flex space-x-6">
                <div className="text-3xl font-extrabold md:text-6xl">
                    {shoe.price}$
                </div>
                <Select title={"QTY"} options={QTY}/>
                <Select title={"SIZES"} options={SIZES}/>
                </div>
                
                <div className="space-x-10">
                <button className="h-14 w-44 bg-black text-white
                 hover:bg-blue-600 transform active:scale-75 ">
                    Add to Bag
                 </button>
                 <a href="#" className="text-lg font-blod underline unline-offset-4">
                    View Details
                 </a>
                </div>
                
            </div>
        </div>
    );
}