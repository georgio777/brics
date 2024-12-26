function reviewsHandler() {
    const modalReviewsWindow = document.querySelector('.modal__reviews')
    const reviewsOpenButton = document.querySelectorAll('.reviews__open')
    const buttonCloseReviews = document.querySelector('.modal__reviews--close')

    const wideImg = document.querySelector('.modal__full--img')

    const allReviewImgs = document.querySelectorAll('.thumbnail__to--wide')

    const prevReview = document.querySelector('.prev__review')
    const nextReview = document.querySelector('.next__review')

    const reviewsCloseButton = document.querySelector('.reviews__close')
    let currentReview = 0

    reviewsCloseButton.addEventListener('click', ()=>{
        wideImg.style.display = "none";
    })

    function reviewPlus() {
        if (currentReview == allReviewImgs.length-1) {
            currentReview = 0
        } else {
            currentReview += 1
        }
        wideImg.querySelector('img').src = allReviewImgs[currentReview].src  
    }

    function reviewMinus() {
        if (currentReview == 0) {
            currentReview = allReviewImgs.length - 1       
        } else {
            currentReview -= 1
        }
        wideImg.querySelector('img').src = allReviewImgs[currentReview].src
    }

    nextReview.addEventListener('click', reviewPlus)

    prevReview.addEventListener('click', reviewMinus)

    wideImg.addEventListener('click', (evt)=>{
        if (evt.target == wideImg) {
            wideImg.style.display = "none";
        }
    })

    buttonCloseReviews.addEventListener('click', ()=>{
        modalReviewsWindow.style.display = "none";
    })

    reviewsOpenButton.forEach(rob=>{
        rob.addEventListener('click', ()=>{
            modalReviewsWindow.style.display = "flex";
        })
    })

    allReviewImgs.forEach((tmb, index)=>{
        tmb.addEventListener('click', (event)=>{
            currentReview = index;                 
            wideImg.style.display = "flex";
            wideImg.querySelector('img').src = event.target.src
        })
    })
    // swipes
    let touchstartX = 0
    let touchendX = 0
    function checkDirection() {    
        if (touchendX < touchstartX - 50) {
            reviewPlus()
        }
        if (touchendX > touchstartX + 50) {
            reviewMinus()
        }
      }
    
      wideImg.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
      })
    
      wideImg.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
      })    

}
reviewsHandler()




