import React, {useState} from 'react';


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div>
            <ul className="pagination">
                {portionNumber > 1 &&
                <i className="material-icons" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>chevron_left</i>}

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return (<li className={props.currentPage === p && "active"} onClick={(e) => {
                            props.onPageChanged(p)
                        }}><a>{p}</a>
                        </li>)
                })}
                {portionCount > portionNumber &&
             <i className="material-icons" onClick={() => {
                 setPortionNumber(portionNumber + 1)
             }}>chevron_right</i>}
            </ul>


            {/*<ul className="pagination pagination-sm">*/}
            {/*    {portionNumber > 1 &&*/}
            {/*    <button className="page-link page-item" onClick={() => {*/}
            {/*        setPortionNumber(portionNumber - 1)*/}
            {/*    }}>Назад</button>}*/}


            {/*    {pages*/}
            {/*        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)*/}
            {/*        .map((p) => {*/}
            {/*            return <li className={props.currentPage === p ? "page-item active" : "page-item"}><span*/}
            {/*                className="page-link" onClick={(e) => {*/}
            {/*                props.onPageChanged(p);*/}
            {/*            }}>{p}</span></li>*/}
            {/*        })}*/}

            {/*    {portionCount > portionNumber &&*/}
            {/*    <button className="page-link page-item" onClick={() => {*/}
            {/*        setPortionNumber(portionNumber + 1)*/}
            {/*    }}>Вперёд</button>}*/}
            {/*</ul>*/}

        </div>
    )
}

export default Paginator

