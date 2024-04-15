

export function Sidebar({ children, isOPen, onClickClose })
{
    return (
        <div>
            <div className={`bg-white overflow-auto right-0 w-full fixed h-full top-0 md:w-[30%] shadow-md
            z-50 transition transform duration-300 ${ isOPen ? "transalate-x-0" : "translate-x-full"}`}>
            <button onClick={onClickClose} className="p-2 absolute right-4 top-4 text-black font-bold">
                X
            </button>
            { children }
            
            </div>
            {isOPen && <div className="z-20 bg-black opacity-50 h-full w-full fixed top-0 left-0"></div>}
        </div>
    )
}