const sliderc = document.querySelector('.slider-container')
const slideright = document.querySelector('.right-slide')
const slideleft = document.querySelector('.left-slide')
const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const slideslength = slideright.querySelectorAll('div').length


let activeSlideindex = 0
slideleft.style.top = `-${(slideslength-1)*100}vh`

upbutton.addEventListener('click', ()=> slidechange('up'))
downbutton.addEventListener('click', ()=> slidechange('down'))

const slidechange = (direction) => {
    const sliderheight = sliderc.clientHeight
    if(direction === 'up')
    {
        activeSlideindex++
        if(activeSlideindex>slideslength-1){
            activeSlideindex=0
        }
    }
    else if(direction ==='down')
    {
        activeSlideindex--
        if(activeSlideindex<0)
        {
            activeSlideindex = slideslength-1
        }
    }
    slideright.style.transform = `translateY(-${activeSlideindex * sliderheight}px)`
    slideleft.style.transform = `translateY(${activeSlideindex * sliderheight}px)`
}

