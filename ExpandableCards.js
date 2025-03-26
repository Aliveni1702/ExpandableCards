function updateTotal() {
    const expandedCard = document.querySelector('.price-box.expanded');
    if (expandedCard) {
        const priceText = expandedCard.querySelector('.highlight').textContent;
        document.getElementById('total-price').textContent = priceText;
    }
}
function toggleExpand(selectedBox) {
    document.querySelectorAll(".price-box").forEach((box, index) => {
        let details = box.querySelector(".details");
        let radio = box.querySelector("input[type='radio']");

        if (box === selectedBox) {
            box.classList.add("expanded");
            details.style.display = "block";
            radio.checked = true;
        } else {
            box.classList.remove("expanded");
            details.style.display = "none";
            radio.checked = false;
        }
    });
    updateTotal();
}