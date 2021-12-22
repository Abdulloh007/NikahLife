window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Header
    // Mobile Menu Srcipt
    // const sideBar = document.querySelector('.nl-m-menu'),
    // sideBarOverlay = document.querySelector('.nl-menu_overlay'),
    // sideBarBtn = document.querySelector('.nl-humburger');
    //
    // sideBarBtn.addEventListener('click', function () {
    //     if (this.classList.contains('active')) {
    //         this.classList.remove('active');
    //         sideBar.classList.remove('open');
    //         sideBarOverlay.classList.remove('open');
    //         sideBarOverlay.style.display = 'none'
    //         document.documentElement.style.overflow = ''
    //     }
    //     else {
    //         this.classList.add('active');
    //         sideBar.classList.add('open');
    //         sideBarOverlay.classList.add('open');
    //         sideBarOverlay.style.display = '';
    //         document.documentElement.style.overflow = 'hidden'
    //     }
    // });

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
            const closeBtn = item.querySelector('.fa-close');
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

})
