import { useState } from "react";
import ReactPaginate from "react-paginate";
import './pagination.css'
export default function PaginatedItems({ itemsPerPage ,data ,setPage  }) {

const pageCount = data.length / itemsPerPage
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        onPageChange={(e)=>setPage(e.selected+1)}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="custom_pagination"
        pageLinkClassName="pagination-tag-anchor "
        activeLinkClassName="active-anchor"
        previousLinkClassName	="previous-link"
        nextLinkClassName="next-link"
      />
    </>
  );
}