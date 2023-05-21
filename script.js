window.addEventListener("DOMContentLoaded", () => {
    const galleryThumb = new Swiper(".collection-thumb", {
        spaceBetween: 10,
        slidesPerView: 6,
        centeredSlides: false,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 0,
    });

    const galleryTop = new Swiper(".collection-slider", {
        pagination: {
            el: ".collection-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: galleryThumb,
        },
        loop: true,
        loopedSlides: 0,
    });

    const modalTriggers = document.querySelectorAll(".collection-catalog-wrap"),
        modal = document.querySelector(".collection-modal"),
        closeBtnModal = document.querySelector(".collection-modal-close");

    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    modalTriggers.forEach((btn) => {
        btn.addEventListener("click", () => {
            showModal();
        });
    });

    closeBtnModal.addEventListener("click", () => {
        closeModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
