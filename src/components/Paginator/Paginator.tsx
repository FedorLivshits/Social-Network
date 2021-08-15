import React, { useState } from 'react'
import {Pagination, Row} from 'react-bootstrap'
import './paginator.css'


type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
    screenWidth: number
}

const Paginator: React.FC<PropsType> = ({ onPageChanged, currentPage, totalUsersCount, screenWidth}) => {
    let portionSize = screenWidth > 550 ? 10 : 5

    let [portionNumber, setPortionNumber] = useState(1)

    let totalPages = [];
    for (let i = 0; i <= totalUsersCount; i++) {
        totalPages.push(i)
    }

    let portionCount = Math.ceil(totalUsersCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <Row>
            <Pagination className="paginator">
                {portionNumber > 1 &&
                    <Pagination.Prev onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }} />
                }
                {totalPages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <Pagination.Item onClick={() => onPageChanged(p)}
                        className={(currentPage === p) ? "active" : ""}>
                        {p}
                    </Pagination.Item>)}


                {portionCount > portionNumber &&
                    <Pagination.Next onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }} />
                }
            </Pagination>
        </Row>
    );
}

export default Paginator;
