import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

interface Props {
  itemsPerPage: number,
  totalItems: number,
  data: any
  handlePageChange: (e: any)=> void
}
type selectedItem = { selected: number; }

const MyPagination: React.FC<Props> = ({itemsPerPage, totalItems, handlePageChange, data}) => {
  const [pageCount, setPageCount] = useState<number>(0)
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.totalItems / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.totalItems;
    
    setItemOffset(newOffset);
    console.log("ativooo")
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(e) => {handlePageClick(e)}}
        onClick={()=> { handlePageClick(pageCount)}}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={undefined}
      />
    </>
  )
}

export default MyPagination