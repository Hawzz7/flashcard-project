import React from "react";
import { useSelector } from "react-redux";
import grey from "../assets/images/Grey.jpg";
import { Link } from "react-router-dom";
import MyCard from "../components/MyCard";

function MyFlashcard() {
  const data = useSelector((state) => {
    return state.cards.cardValues;
  });
  console.log("data", data);
  return (
    <div className="flex flex-wrap justify-center gap-10 px-[180px]">
      {data.length > 0 && (
        <>
          {data.map((item) => {
            return (
              <div
              key={item.card.groupId}
              >
              {<MyCard datas={item}/>}
            </div>
            );
          })}
         
        </>
      )}
       {data.length < 1 && <div>Create a card to display</div>}
    </div>
  );
}

export default MyFlashcard;
