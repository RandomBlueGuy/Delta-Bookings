import React from "react";
import "./HotelListPagination.css";

function HotelListPagination({
  maxNpages,
  actualPage,
  setActualPage,
  refProp,
}) {
  const specialChar = ["<<", ">>"];
  // const [optionArr , setOptionArr] = useState([]);

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
      <select name="" id="">
        {optionGenerator()}
      </select>
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
    </div>
  );
}

export default HotelListPagination;

// import React from "react";
// import "./HotelListPagination.css";

// function HotelListPagination({
//   maxNpages,
//   actualPage,
//   setActualPage,
//   refProp,
// }) {
//   const specialChar = ["<<", ">>"];
//   // const myRef = useRef(null);

//   const scrollToTop = () => {
//     refProp.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const firstPage = () => {
//     scrollToTop();
//     setActualPage(0);
//   };

//   const nextPage = () => {
//     scrollToTop();
//     setActualPage(actualPage + 1);
//   };

//   const prePage = () => {
//     scrollToTop();
//     setActualPage(actualPage - 1);
//     scrollToTop();
//   };

//   const lastPage = () => {
//     scrollToTop();
//     setActualPage(maxNpages - 1);
//     scrollToTop();
//   };

//   const optionGenerator = () => {
//     const optionArr = [];
//     for (let i = 0; i < maxNpages; i++) {
//       optionArr.push(<option
//       value={`${i}`}
//       selected={actualPage === i ? true : false}
//       onClick={(event) => setActualPage(event.target.value)}
//       >{`${i+1} / ${maxNpages}`}</option>);
//     }
//     return optionArr;
//   };

//   return (
//     <div className="pagination-ctn">
//       <button
//         className={actualPage > 0 ? "act-chk" : "dis-chk"}
//         disabled={actualPage > 0 ? false : true}
//         onClick={firstPage}
//       >
//         ❮❮
//       </button>
//       <button
//         className={actualPage > 0 ? "act-chk" : "dis-chk"}
//         disabled={actualPage > 0 ? false : true}
//         onClick={prePage}
//       >
//         {actualPage}
//       </button>
//       {/* <input
//         type="text"
//         className="actual"
//         placeholder={`${actualPage + 1} / ${maxNpages}`}
//       ></input> */}
//       <select name="" id="">
//         {optionGenerator()}
//       </select>
//       <button

//         className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
//         disabled={actualPage < maxNpages - 1 ? false : true}
//         onClick={nextPage}
//       >
//         {Number(actualPage) + 2}
//       </button>
//       <button
//         className={actualPage < maxNpages - 1 ? "act-chk" : "dis-chk"}
//         disabled={actualPage < maxNpages - 1 ? false : true}
//         onClick={lastPage}
//       >
//         ❯❯
//       </button>
//     </div>
//   );
// }

// export default HotelListPagination;
