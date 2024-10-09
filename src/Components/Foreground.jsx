import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef (null); 
    const data = [
        {
            desc:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.",
            filesize: "9mb",
            close: true,
            tag :{isOpen: true, tagTitle:"upload now", tagColor: "blue"}
        },
        {
            desc:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.",
            filesize: "9mb",
            close: true,
            tag :{isOpen: true, tagTitle:"Download now", tagColor: "green"}
        },
        {
            desc:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.",
            filesize: "9mb",
            close: true,
            tag :{isOpen: false, tagTitle:"Download now", tagColor: "green"}
        },
        {
            desc:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.",
            filesize: "9mb",
            close: true,
            tag :{isOpen: true, tagTitle:"Download now", tagColor: "green"}
        },
        {
            desc:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing.",
            filesize: "9mb",
            close: true,
            tag :{isOpen: false, tagTitle:"Download now", tagColor: "green"}
        },
        
        
    ];


  return (
    <div ref ={ref} className=' p-5 flex gap-10 flex-wrap fixed z-[3] top-0 left-0 w-full h-full'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}

    </div>
  )
}

export default Foreground