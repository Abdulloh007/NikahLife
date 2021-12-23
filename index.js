window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Header
    // Mobile Menu Srcipt
    const sideBar = document.querySelector('.nl-side-menu'),
    sideBarOverlay = document.querySelector('.nl-menu_overlay'),
    sideBarBtn = document.querySelector('.nl-humburger');

    sideBarBtn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            sideBar.classList.remove('open');
            sideBarOverlay.classList.remove('open');
            sideBarOverlay.style.display = 'none'
            document.documentElement.style.overflow = ''
        }
        else {
            this.classList.add('active');
            sideBar.classList.add('open');
            sideBarOverlay.classList.add('open');
            sideBarOverlay.style.display = '';
            document.documentElement.style.overflow = 'hidden'
        }
    });

    //ScrollTop Fixed menu
    const nav = document.querySelectorAll('.nl-nav');

    window.addEventListener('scroll', ()=>{
        if (document.documentElement.scrollTop > 80) {
            nav.forEach(item => item.classList.add('fix'));
        }else {
            nav.forEach(item => item.classList.remove('fix'));
        }
    })
    //Tabination
    const tabination = document.querySelectorAll('.nl-tabination');
    //--> Secont Lewel Tabination
    const secontLewelTabination = document.querySelectorAll('.nl-nd_tabination');

    function activeTabination(elem, elemNav, elemNavItem, elemTabItem) {
        const tabNav = elem.querySelector(elemNav),
        tabBtns = elem.querySelectorAll(elemNavItem),
        tabs = elem.querySelectorAll(elemTabItem);

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i] || event.target == tabBtns[i].children[0]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined || tabination !== null || secontLewelTabination != undefined || secontLewelTabination != null) {
        tabination.forEach(item => activeTabination(item, '.nl-tab_nav', '.nl-tab_nav li', '.nl-tab_item'));
        secontLewelTabination.forEach((item) => activeTabination(item, '.nl-nd-tab_nav', '.nl-nd-tab_nav li', '.nl-nd-tab_item'));
    }

    //PopUp`s
    let popUpBtns = document.querySelectorAll('.nl-pop_up-btn'),
        popUps = document.querySelectorAll('.nl-pop_up');

    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.nl-close');
            closeBtn.addEventListener('click', function () {
                item.classList.remove('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.add('active');
                }
            }
        })
    }
    if (popUpBtns != undefined && popUps != undefined) {
        popUpBtns.forEach((item) =>  popUper(item));
    }

    // History backdrop
    let goBackBtn = document.querySelectorAll('.nl-go_back');

    goBackBtn.forEach(item => {
        item.addEventListener('click', function () {
            window.history.back();
        })
    });

    //Show More
    const showMoreList = document.querySelectorAll('.nl-show_more');

    function showMoreFromeList(elem) {
        const showMoreItem = elem.querySelectorAll('.nl-shm_item');
        let showMoreBtn = elem.querySelector('.nl-shm_btn'),
        collapseHeight = 0;

        for (let i = 0; i < parseInt(elem.dataset.show); i++) {
            if (i == parseInt(elem.dataset.show) - 1) {
                collapseHeight += 10 * (parseInt(elem.dataset.show) - 1) + 90;
            }
            collapseHeight += showMoreItem[i].offsetHeight;
            elem.style.height = collapseHeight + 'px';
            if (i == parseInt(elem.dataset.show) - 1) {
                collapseHeight = 0;
                break;
            }
        }

        showMoreBtn.addEventListener('click', function () {
            if (elem.classList.contains('not_opened')) {
                elem.style.height = elem.scrollHeight + 'px';
                elem.classList.remove('not_opened');
                this.innerHTML = `Скрыть`;
            }else if (!elem.classList.contains('not_opened')) {
                for (let i = 0; i < parseInt(elem.dataset.show); i++) {
                    if (i == parseInt(elem.dataset.show) - 1) {
                        collapseHeight += 10 * (parseInt(elem.dataset.show) - 1) + 80;
                    }
                    collapseHeight += showMoreItem[i].offsetHeight;
                    elem.style.height = collapseHeight + 'px';
                    if (i == parseInt(elem.dataset.show) - 1) {
                        collapseHeight = 0;
                        break;
                    }
                }
                elem.classList.add('not_opened');
                this.innerHTML = `Загрузить все`;
            }
        })
    }
    showMoreList.forEach(item => showMoreFromeList(item));

})
