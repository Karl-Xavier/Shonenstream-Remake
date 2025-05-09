export default function getPages(totalPages, currentPage){

  const pages = []

  if(totalPages <= 5){
    for (let i = 1; i <= totalPages; i++){
      pages.push(i)
    }
    return pages
  }
  
  if(currentPage === 1) {

    pages.push(1, 2, '.....', totalPages)
  }else if(currentPage === 2){
    pages.push(1, 2, '.....', totalPages)
  }else if(currentPage > 2 && currentPage < totalPages - 1){
    pages.push(currentPage - 1, currentPage, '.....', totalPages)
  }else if(currentPage === totalPages - 1){
    pages.push(1, '.....', totalPages - 1, totalPages)
  }else if(currentPage === totalPages){
    pages.push(1, '.....', totalPages - 1, totalPages)
  }

  return pages

}