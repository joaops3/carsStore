import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';

interface Props {
  itemsPerPage: number,
  totalItems: number,
  handlePageChange: (e: any)=> void
}
type selectedItem = { selected: number; }

const MyPagination: React.FC<Props> = ({itemsPerPage, totalItems, handlePageChange}) => {
  const [pageCount, setPageCount] = useState<number>(0)
  const handlePageClick = (event: selectedItem): void => {

    const newOffset = (event.selected * itemsPerPage) % totalItems;
  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={undefined}
      />
    </>
  )
}

export default MyPagination