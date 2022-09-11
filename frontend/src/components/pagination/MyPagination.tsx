import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

interface Props {
  itemsPerPage: number,
  totalItems: number,
  handlePageChange: (e: any)=> void
}
type selectedItem = { selected: number; }

const MyPagination: React.FC<Props> = ({itemsPerPage, totalItems, handlePageChange}) => {
  const [pageCount, setPageCount] = useState<number>(1)
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  
 

  
  const handlePageClick = (event: any) => {
   
    handlePageChange(event.selected +1)
  };

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemsPerPage]);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => {handlePageClick(e)}}
       
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={undefined}
        containerClassName={"pagination-container"}
        pageLinkClassName={"pagination-link"}
        previousClassName={"pagination-previous"}
        nextLinkClassName={"pagination-next"}
        activeClassName={"pagitation-active"}
      />
    </>
  )
}

export default MyPagination