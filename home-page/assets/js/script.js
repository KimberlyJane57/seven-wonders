const paginationNumbers = document.getElementsByClassName("pagination-link");
const paginatedList = document.getElementsByClassName("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementsByClassName("pagination-next");
const prevButton = document.getElementsByClassName("pagination-previous");

const paginationLimit = 7;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("aria-label");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    paginationNumbers.appendChild(pageNumber);
  };
  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  };

  window.addEventListener("load", () => {
    getPaginationNumbers();
  });

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    listItems.forEach((item, index) => {
      item.classList.add("hidden");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden");
      }
    });
  };
  jsonData.forEach((item, index) => {
    elementContainer.innerHTML = ''
    if (index >= prevRange && index < currRange) {
      elementContainer.appendChild(item)
    }
  });

  window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);
  });
  window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);
    prevButton.addEventListener("click", () => {
      setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener("click", () => {
      setCurrentPage(currentPage + 1);
    });
    document.querySelectorAll(".pagination-number").forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex) {
        button.addEventListener("click", () => {
          setCurrentPage(pageIndex);
        });
      }
    });
  });
