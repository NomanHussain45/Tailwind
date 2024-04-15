import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { SIZES,QTY } from "../constant";

export function Cartitem( { item: {product, qty, size }})
{
    return (
    <div className="hover:bg-[#DAFFA2] cursor-pointer p-2  bg-gray-50 w-50 space-y-2">
              <div className="flex space-x-2">
        {/* Image */}
        <img className="h-14" src={product.src}/>
        <div className="space-y-2">
            {/* Title and Description */}
        <div className="font-blod">{product.title}</div>
        <div className="text-sm text-gray-400">{product.description}</div>
         {/* Price */}
         <div className="font-bold">{product.price}$</div>
       
        </div>
        </div>

        <div className="flex justify-between pl-[78px]">
            <div className="flex space-x-4">
            <div>
                <div className="font-bold">QTY</div>
                <Select title="" defaultValue={qty} options={QTY} className={"w-16 p-1"}/>
            </div>
            <div>
                <div className="font-bold">SIZE</div>
                <Select title="" defaultValue={size} options={SIZES} className={"w-16 p-1"}/>
            </div>
            </div>
          
            <button>
                <CiTrash size={25} className="text-black font-bold"/>
            </button>
        </div>
    </div>
  
    )

}