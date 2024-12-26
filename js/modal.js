function modalTabsHandler(){
    const tabs = document.querySelectorAll('.modal__tab')
    const tabContents = document.querySelectorAll('.modal__tab--content')
    
    
    tabs.forEach(tab => {
        tab.addEventListener('click', ()=> {
    
    
          tabs.forEach(t => {
            t.classList.remove('active__tab--modal')})
      
          tab.classList.add('active__tab--modal')
      
          const target = tab.dataset.modalbutton;
          tabContents.forEach(content => {
            content.classList.remove('active__content')
      
            document.querySelector(`.modal__tab--content[data-modal-content="${target}"]`).classList.add('active__content')
          })    
        
        })
    })

        // Get the modal
    var modal = document.getElementById("myModal");


    const btns = document.querySelectorAll('.open__modal')

    var span = document.getElementsByClassName("close")[0];



    btns.forEach((b)=>{
        b.addEventListener('click', ()=>{
        modal.style.display = "block";
        // закрываем меню если открыли модалку рассчитать из него
        modalMenu.classList.remove('d__flex')
        })
    }
    )

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // modal menu
    const menuButton = document.querySelector('#menu__button')
    const modalMenu = document.querySelector('.menu__modal--window')
    const closeModalMenu = document.querySelector('.close__modal-menu')

    menuButton.addEventListener('click', ()=>{
        modalMenu.classList.add('d__flex')
        closeModalMenu.addEventListener('click', ()=>{
            modalMenu.classList.remove('d__flex')
        })
    })






}
modalTabsHandler()





