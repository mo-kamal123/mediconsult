import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const TablePagiation = () => {
    const totalPages = 239
    // const curr = 2
    const [curr, setCurr] = useState(1)
    

  return (
    <div className="bg-white border border-borders rounded-2xl flex flex-col items-center gap-4 md:gap-10 px-5 py-3 mb-5">
        <div className="flex items-center gap-2">
            <p>page 1 of 239</p>
            <p>(2389 Items)</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
            <p><IoIosArrowBack /></p>
            {[...Array(totalPages).keys()].slice(curr - 1, curr + 6).map((num) => (
                <p onClick={() => setCurr(num + 1)} className={`${curr === num + 1 ? 'bg-blue-400' : 'bg-white'} w-7 h-7  md:w-10 md:h-10 flex items-center justify-center border border-borders rounded-lg cursor-pointer`}>{num + 1}</p>
            ))}
            {
                
            }
            <p className="hidden md:block">. . . . . . . .</p>
            {[...Array(totalPages).keys()].slice(-3).map((num) => (
                <p onClick={() => setCurr(num + 1)} className={`${curr === num + 1 ? 'bg-blue-400' : 'bg-white'} hidden md:flex  w-10 h-10  items-center justify-center border border-borders rounded-lg cursor-pointer`}>{num + 1}</p>
            ))}
            <p><IoIosArrowForward /></p>
        </div>
    </div>
  )
}

export default TablePagiation