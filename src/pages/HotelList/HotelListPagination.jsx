import React from "react";
import "./HotelListPagination.css";

function HotelListPagination({
  maxNpages,
  actualPage,
  setActualPage,
  refProp,
}) {
  const specialChar = ["<<", ">>"];

  const optionGenerator = () => {
    const optionArr = [];
    for (let i = 0; i < maxNpages; i++) {
      optionArr.push(
        <option
          value={`${i}`}
          onClick={(event) => {
            scrollToTop();
            setActualPage(i);
          }}
          selected={actualPage === i ? true : false}
        >{`${i + 1} / ${maxNpages}`}</option>
      );
    }
    return optionArr;
  };

  const scrollToTop = () => {
    refProp.current.scrollIntoView({ behavior: "smooth" });
  };

  const firstPage = () => {
    scrollToTop();
    setActualPage(0);
    optionGenerator();
  };

  const nextPage = () => {
    scrollToTop();
    setActualPage(actualPage + 1);
    optionGenerator();
  };

  const prePage = () => {
    scrollToTop();
    setActualPage(actualPage - 1);
    optionGenerator();
  };

  const lastPage = () => {
    scrollToTop();
    setActualPage(maxNpages - 1);
    optionGenerator();
  };

  return (
    <div className="pagination-ctn">
      <button
        className={actualPage > 0 ? "act-chk" : "dis-chk"}
        disabled={actualPage > 0 ? false : true}
        onClick={firstPage}
      >
        ❮❮
      </button>
      <button
        className={actualPage > 0 ? "act-chk" : "dis-chk"}
        disabled={actualPage > 0 ? false : true}
        onClick={prePage}
      >
        {actualPage}
      </button>
      <button>{`${actualPage + 1} / ${maxNpages}`}</button>
      <button
        className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
        disabled={actualPage < maxNpages - 1 ? false : true}
        onClick={nextPage}
      >
        {Number(actualPage) + 2}
      </button>
      <button
        className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
        disabled={actualPage < maxNpages - 1 ? false : true}
        onClick={lastPage}
      >
        ❯❯
      </button>
      {/* <h1 onClick={() => {setActualPage(actualPage + 1)}}>{actualPage} - </h1> */}
    </div>
  );
}

export default HotelListPagination;
