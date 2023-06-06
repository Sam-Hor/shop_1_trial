window.addEventListener('scroll', function () {
    document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
});

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.toggle();
});

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView();
    });
});

// блок дает кнопке "вверх" скролить вверх и показываться не сразу
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1100: {
                items: 4
            }
        }
    });
});