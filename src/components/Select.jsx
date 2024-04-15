// export function Select({title,options}) {
//     return (
//         // <select defaultValue={""} className="w-24 appearance-none">
//         //     <option value="" disabled hidden>
//         //         {title}
//         //     </option>
//         //     {options.map((option) => ( 
//         //     <option value={option} key={option}>{option}</option>
//         //     ))}
//         // </select>
//         <>
//         <select>
//             {options.map((options) =>{
//                 <option key={options}>{options}</option>
//             })}
//         </select>
//         </>
//     );
// }
export function Select({title,options, className, defaultValue}) {
    return (
        <div className="relative">
            <select defaultValue={defaultValue||""} className={`w-24 appearance-non
             border border-gray-300 p-4 ${className}`}>
        <option value="" disabled hidden>
        {title}
        </option>
        {options.map((option) => ( 
        <option value={option} key={option}>{option}</option>
        ))}
        </select>
    </div>
    );
  }
  