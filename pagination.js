const totalResults = 100;
const perPageResults = 12;
const totalPagesForResults= Math.ceil(totalResults / perPageResults);
console.log(totalPagesForResults);
const currentPage = 1;
switch(true) {
    case currentPage <= 0: console.log("Error");
    break;
    case currentPage == 1: console.log(currentPage, currentPage + 1, currentPage + 2);
    break;
    case currentPage == 2: console.log(currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
    break; 
    case currentPage > 2 && currentPage <= totalPagesForResults -2: console.log(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
    break;
    case currentPage == totalPagesForResults: console.log(currentPage - 2, currentPage - 1, currentPage);
    break;
    case currentPage == totalPagesForResults - 1: console.log(currentPage -2, currentPage - 1, currentPage); 
    break;
    case currentPage > totalPagesForResults: console.log("ERROR 404");
    break;
}