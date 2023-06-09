import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HandsTab from "../assets/images/hands-tab.jpg";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import Modal from "../components/Modal";

function DetailsFlashcard() {
  const { groupId } = useParams();
  // console.log("GroupId", groupId);

  const navigate = useNavigate();

  const cardDetails = useSelector((state) => {
    return state.cards.cardValues;
  });

  console.log("cardDetails", cardDetails)

  const [curentCard, setCurentCard] = useState({});
  const [insideCard, setInsideCard] = useState({});

  const viewCard = (id) => {
    const showInsideCard = curentCard.form2.filter(
      (item) => item.formId === id
    );
    setInsideCard(showInsideCard[0]);
  };

  useEffect(() => {
    if (!groupId || !cardDetails) return;
    const temp = cardDetails.filter((item) => item.card.groupId === groupId);
    setCurentCard(temp[0].card);
  }, [groupId, cardDetails]);

  useEffect(() => {
    curentCard.form2 && setInsideCard(curentCard.form2[0]);
  }, [curentCard]);

  const [showModal, setShowModal] = useState(false);

  const [url, setUrl] = useState("");

  const shareurl = () => {
    setShowModal(true);
    setUrl(`${document.location.href}`);
  };

  // console.log("url is:", url);

  return (
    <div className="px-[180px]">
      <div className="flex gap-4">
        <div onClick={() => navigate(-1)}>{<ArrowBackIcon />}</div>
        <div className="flex-col">
          <div className="text-xl font-bold">{curentCard.createGroup}</div>
          <div>{curentCard.addDescription}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-10 min-[740px]:grid-cols-4">
        <div className="flex flex-col items-center justify-center px-3 pt-2 bg-white rounded-md h-fit">
          <div className="flex justify-center text-[18px] font-semibold">
            Flashcards
          </div>

          <hr className="h-[3px] bg-stone-600 w-full" />
          <div className="mt-1 mb-1 space-y-1">
            {curentCard.form2 &&
              curentCard.form2.map((item,index) => (
                <div
                  key={item.formId}
                  className={`flex justify-center items-center mt text-slate-600 font-medium rounded-md hover:bg-slate-300 cursor-pointer ${
                    item.formId === insideCard.formId &&
                    "!text-red-400 !font-bold"
                  }`}
                  onClick={() => viewCard(item.formId)}
                >
                  {index + 1}.&nbsp;{item.enterTerm}
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center col-span-2 bg-white rounded-lg shadow-lg min-[1000px]:flex-row">
          <img
            src={HandsTab}
            alt="error"
            className="object-contain w-[32vw] h-full p-5 min-[740px]:w-[20vw]"
          />
          <p className="object-contain w-full px-5 py-2">
            {insideCard.enterDefination}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            className="p-2 bg-white rounded-md"
            onClick={() => shareurl()}
          >
            <ShareIcon /> Share
          </button>
          <button className="p-2 bg-white rounded-md">
            <DownloadIcon /> Download
          </button>
          <button className="p-2 bg-white rounded-md">
            <PrintIcon /> Print
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}
      share={url}
      />
    </div>
  );
}

export default DetailsFlashcard;
