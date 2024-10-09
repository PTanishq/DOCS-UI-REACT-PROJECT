import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import {motion} from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.2} whileDrag={{scale:1.09}} className='overflow-hidden flex-shrink-0 relative py-10 px-8 w-60 h-72 text-white rounded-[45px] bg-zinc-900/80'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className=' footer absolute bottom-0 left-0 w-full'>
            <div className='mb-3 px-8 flex items-center justify-between'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex justify-center items-center'>
                    {data.close ? <IoIosClose color='white' size="0.8rem"/> :< MdOutlineFileDownload color='white' size="0.8rem" />}
                </span>
            </div>

            {
                data.tag.isOpen && (
                    <div className={`flex items-center justify-center tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                    <h1 className='text-sm font-semibold'>{data.tag.tagTitle}</h1>
            </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card