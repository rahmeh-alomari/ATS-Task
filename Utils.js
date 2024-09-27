const generateStars = (rate) => 
    Array.from({ length: rate }, () => '<i class="fas fa-star"></i>').join('');
const dropDownMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
};
window.onclick = (event) => {
    if (!event.target.matches('[data-role="dropbtn"]') && !event.target.closest('[data-role="dropdown"]')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (const dropdown of dropdowns) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
};
