document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active')
        })
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu__item-left') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active')
        }
    })

    // Responsive sidebar categories
    const sidebarItems = document.querySelectorAll('.container-slider-sidebar-item')

    sidebarItems.forEach((item) => {
        const link = item.querySelector('a')
        const content = item.querySelector('.container-slider-sidebar-item-content')

        if (link && content) {
            link.addEventListener('click', function (e) {
                e.preventDefault()
                content.classList.toggle('active')
            })
        }
    })
})
