import React from "react";
import grey from "../assets/images/Grey.jpg";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { delCardValue } from "../store/slice/CardSlice";
import { useDispatch } from "react-redux";

function MyCard({ datas }) {
  const dispatch = useDispatch();
  
  const id = datas.card.groupId;
  // console.log("datas", datas);
  // console.log("id", id);


  const deleteCard = (id) => {
    dispatch(delCardValue(id));
  };

  return (
    <>
      <div
        key={id}
        className="p-7 shadow-md bg-white rounded-md h-[200px] w-[280px]"
        // hover:h-[220px] hover:w-[300px]
        // hover:p-8
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

        <div className="mt-[20px] flex space-x-[100px]">
          <Link
            to={`/detailsflashcard/${datas.card.groupId}`}
            className="font-semibold text-red-600 rounded-[5px] ring-red-500 hover:text-red-800 hover:ring-2 hover:ring-red-800 ring-offset-4
            active:text-blue-500
            active:ring-blue-500
            "
          >
            View Card
            <ArrowRightAltIcon />
          </Link>

          <button
            className="text-slate-500 hover:text-red-800 active:text-blue-500 "
            onClick={() => deleteCard(id)}
          >
            <DeleteSweepIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyCard;
