import React from 'react'
import grey from "../assets/images/Grey.jpg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function MyCard({datas}) {
  return (
    <>
        <div
                key={datas.groupId}
                className="p-8 shadow-md bg-white rounded-md h-[220px] w-[300px]"
              >
                <div className="flex gap-12">
                  <img
                    src={grey}
                    alt="grey"
                    className=" h-[60px] w-[60px] rounded-[100px]"
                  />
                  <div className="flex flex-col py-2">
                    <div className="font-semibold">{datas.card.createGroup}</div>

                    <div className="text-slate-500 text-[15px]">
                      {datas.card.form2.length} cards
                    </div>
                  </div>
                </div>
                <div className="mt-4 truncate">{datas.card.addDescription}</div>

                <div className='mt-[16px]'>
                <Link
                  to={`/detailsflashcard/${datas.card.groupId}`}
                  
                  className="font-semibold text-red-600 rounded-[5px] ring-red-500 hover:text-red-800 hover:ring-2 hover:ring-red-800 ring-offset-4 "
                >
                  View Card
                  
                  <ArrowRightAltIcon/>
                </Link>
                </div>
              </div>
    </>
  )
}

export default MyCard