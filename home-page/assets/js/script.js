const paginationNumbers = document.getElementsByClassName("pagination-link");
const paginatedList = document.getElementsByClassName("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementsByClassName("pagination-next");
const prevButton = document.getElementsByClassName("pagination-previous");
$('')

const paginationLimit = 7;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;



node 