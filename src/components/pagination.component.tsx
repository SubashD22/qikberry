import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

function PaginationComponent({ currentPage, setCurrentPage }: { currentPage: number, setCurrentPage: (page: number) => void }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <Pagination className="border border-border rounded-full w-fit overflow-hidden">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage === 1 && (
          <>
            <PaginationItem>
              <PaginationLink isActive={true} onClick={() => setCurrentPage(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(2)}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(3)}>3</PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage > 1 && currentPage < 10 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive={true} onClick={() => setCurrentPage(currentPage)}>{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage === 10 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(8)}>8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(9)}>9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive={true} onClick={() => setCurrentPage(10)}>10</PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage < 9 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComponent