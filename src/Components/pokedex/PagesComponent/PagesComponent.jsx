import "./PagesComponent.css"

const PagesComponent = ({ totalPages, onChangePage, onBackPage, onNextPage }) => {

    const pagesArray = Array(totalPages).fill().map((_, i) => i + 1);

  return (
    <div className="menu_btn">
        <button onClick={() => onBackPage()}>Back</button>
        {pagesArray.map((page) => <button style={{display: "none"}} key={page} onClick={() => onChangePage(page)}>{page}</button>)}
        <button className="last_btn" onClick={() => onNextPage()}>Next</button>
    </div>
  )
}

export default PagesComponent