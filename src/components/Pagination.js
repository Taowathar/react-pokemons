import ReactPaginate from "react-paginate";
import { PaginationDiv } from "../style/PaginationElements";

const Pagination = (props) => {
  const pageCount = 56;

  const handlePageChange = (selectedObject) => {
    props.setCurrentPage(selectedObject.selected);
  };

  return (
    <PaginationDiv>
      <ReactPaginate
        pageCount={pageCount}
        pageRange={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination-field"}
        previousLinkClassName={"page"}
        breakClassName={"page"}
        nextLinkClassName={"page"}
        pageClassName={"page"}
        disabledClassNae={"disabled"}
        activeClassName={"active"}
      />
    </PaginationDiv>
  );
};

export default Pagination;
