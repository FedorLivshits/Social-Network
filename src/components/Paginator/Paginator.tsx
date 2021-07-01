import React, {useState} from 'react'
import '../Paginator/Paginator.css'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
}
const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize=10}) => {

    let pagesCount = Math.ceil (totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil (pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return  <ul className="pagination">
        {portionNumber > 1 &&
        <i className="material-icons chevron"  onClick={() => {setPortionNumber(portionNumber-1)}}>chevron_left</i>
        }

        {pages
            .filter( p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
            .map( p => {
                return <li className={(currentPage ===  p) ? "active" : ''}
                             onClick={ () => onPageChanged(p)}><a className='paginator-page'>{p}</a></li>
            })}

        {portionCount > portionNumber &&
        <i className="material-icons chevron" onClick={() => {setPortionNumber(portionNumber+1)}}>chevron_right</i>
        }
    </ul>

}


export default Paginator

