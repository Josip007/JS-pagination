const totalResults = 100;
const perPageResults = 12;
const totalPagesForResults= Math.ceil(totalResults / perPageResults);
console.log(totalPagesForResults);
const currentPage = 3;
if(totalPagesForResults > currentPage && totalPagesForResults > currentPage + 1 && currentPage > 0 && currentPage != 1 && currentPage != 2) {
    x = currentPage + 1;
    y = currentPage + 2;
    z = currentPage - 1;
    j = currentPage - 2;
    console.log(j, z, currentPage, x, y);
} else if(totalPagesForResults < currentPage || currentPage < 1){
    console.log("Out of pages!");
} else if(currentPage == 1) {
    console.log(currentPage, currentPage + 1, currentPage + 2);
} else if(currentPage == 2) {
    console.log(currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
}

else {
    a = currentPage - 1;
    b = currentPage - 2;
    console.log(b, a, currentPage);
}