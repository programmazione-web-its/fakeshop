
import { useState } from "react"
export default function Pagination({ totalItems, offset, onChange }) {
    const pagesCount = Math.ceil(totalItems / offset)
    const pages = Array.from(Array(pagesCount), (_, x) => x)

    const [isCurrent, setIsCurrent] = useState()
    const handleClick = (el) => {
        console.log("pages.find(page => page === el )", pages.find(page => page === el ))
        setIsCurrent(el)
        onChange()
    }

    return (
        <div className="flex items-center justify-center gap-3">
            {pages?.map((el) =>
                <span
                    key={el}
                    onClick={()=>handleClick(el)}
                    className={`inline-flex items-center justify-center rounded-full bg-gray-100 w-[40px] h-[40px] cursor-pointer p-2 transition-colors  ${isCurrent === el && 'cursor-default bg-primary text-secondary'}`}>
                    {el + 1}
                </span>
            )}
        </div>
    )
}

