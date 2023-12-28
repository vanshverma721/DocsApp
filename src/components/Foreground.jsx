import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "I have to finish my office work today at any cost.",
            filessize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "I have to finish my office work today at any cost.",
            filessize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },
        {
            desc: "I have to finish my office work today at any cost.",
            filessize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "gren" }
        },
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground