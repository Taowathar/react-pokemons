import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const pageCount = 56;

  const handlePageChange = (selectedObject) => {
    props.setCurrentPage(selectedObject.selected);
  };

  return (
    <div className="pagination-field">
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
    </div>
  );
};

export default Pagination;
