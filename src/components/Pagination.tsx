import './styles/Pagination.css'

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (action: string) => void;
}
const Pagination = ({currentPage = 1, totalPages = 1, handlePageChange}: PaginationProps) => {

    return (
        <div className="pagination-container">
            <button onClick={() => handlePageChange("previous")} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;