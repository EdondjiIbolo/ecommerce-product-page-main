const toggleElement = document.getElementById('toggle-menu')
const toggleCart = document.getElementById('toggle-cart')
const menuElement = document.getElementById('main-menu')
const cartElement = document.getElementById('cart')
const slideElement = document.getElementById('slide')
const slideElement2 = document.getElementById('slide2')
let slideImages = document.querySelectorAll('.slide__item')
// 
let slideImageslast1 =slideElement.children
let slideImageslast = slideImageslast1[slideImageslast1.length-1]

let slideImageslast2 =slideElement.children
let slideImageslast3 = slideImageslast2[slideImageslast2.length-1]




// 
const btnElement = document.getElementById('button')
const btnNext = document.getElementById('next')
const btnBack = document.getElementById('back')
const btnNext2 = document.getElementById('next2')
const btnBack2 = document.getElementById('back2')
const inputElement = document.getElementById('input')
const incremenButton = document.getElementById('increment')
const decremenButton = document.getElementById('decrement')

const paginationElement = document.getElementById('paginacion')
const paginationElement2 = document.getElementById('paginacion2')
const modalElement = document.querySelector('.modal')
const closeElement = document.querySelector('.icono-close')
const rootstyle = document.documentElement.style
// funcion
function addCarito() {
    const fragment = document.createDocumentFragment()
    const cartContainer = document.createElement('div')
    cartContainer.classList.add('compra')

    const compraImg = document.createElement('div')
    compraImg.classList.add('cart-image')
    cartContainer.appendChild(compraImg)
    const imgcart = document.createElement('img')
    imgcart.src = '/images/image-product-1.jpg'
    compraImg.appendChild(imgcart)

    const compraContainer = document.createElement('div')
    compraContainer.classList.add('compra-container')
    cartContainer.appendChild(compraContainer)

        const ElementTitle = document.createElement('p')
        ElementTitle.classList.add('cart-title')
        ElementTitle.textContent = 'Fall Limited Edition Sneakers'
        compraContainer.appendChild(ElementTitle)

        const  Elementquantity = document.createElement('span')
        Elementquantity.classList.add('cart-quantity')
        Elementquantity.textContent = `$125.00 x ${inputElement.value}  `
        compraContainer.appendChild(Elementquantity)

        const  ElementAmount = document.createElement('span')
        ElementAmount.classList.add('cart-quantity')
        ElementAmount.classList.add('title-text')
        let val1 = parseFloat(inputElement.value) ;
        let val2 = parseFloat(125.00) ;
        let val3 = val1 * val2;
        ElementAmount.textContent = `     $${val3}`
        compraContainer.appendChild(ElementAmount)


    const compraImgDelet = document.createElement('div')
    cartContainer.appendChild(compraImgDelet)
    const imgDelet = document.createElement('img')
    imgDelet.setAttribute('id','delete')
    imgDelet.classList.add('img__logo')
    imgDelet.src = '/images/icon-delete.svg'
    compraImgDelet.appendChild(imgDelet)
    

    imgDelet.addEventListener('click',(e)=>{
        console.log(cartElement.children[1].children[0])
        
        cartElement.children[1].children[0].remove();
        cartElement.children[2].remove();
        const textelement = document.createElement('p')
        textelement.classList.add('cart-text')
        textelement.classList.add('description-text')
        textelement.textContent = 'Your cart is empty'
        cartElement.children[1].appendChild(textelement)

        inputElement.value = 0;
        if(inputElement.value==0){
            if(toggleCart.children[1].classList.contains('cart-span')){
                toggleCart.children[1].classList.remove('cart-span');
                toggleCart.children[1].textContent = '';
            }
        }

    })

    fragment.appendChild(cartContainer);
    cartElement.children[1].appendChild(fragment)
}

function crearbtn(){
    const cartBtn = document.createElement('button')
    cartBtn.classList.add('button')
    cartBtn.classList.add('linkbtn')
    cartBtn.textContent = 'Checkout'
    cartElement.appendChild(cartBtn)
}

slideElement.addEventListener('click',(e)=>{
    modalElement.classList.toggle('modal-show')
})
closeElement.addEventListener('click',(e)=>{
    modalElement.classList.remove('modal-show')
})
btnElement.addEventListener('click', (e)=>{
    e.preventDefault();
    if(inputElement.value==0){
        if(toggleCart.children[1].classList.contains('cart-span')){
            toggleCart.children[1].classList.remove('cart-span');
            toggleCart.children[1].textContent = '';
        }
    }
    else{
        toggleCart.children[1].classList.add('cart-span')
        toggleCart.children[1].textContent = inputElement.value
        console.log(toggleCart.children[1].textContent)
        console.log(cartElement.children[1].children[0])
        cartElement.children[1].children[0].remove();
       

        if(inputElement.value == 1){
            addCarito();
            
            if(cartElement.children.length<3){
                crearbtn();
            }
           
        }else{
            addCarito()
            // console.log(cartContainer)
            console.log(document.querySelectorAll('.cart-quantity'))
            document.querySelectorAll('.cart-quantity')[0].textContent =  `$125.00 x ${inputElement.value}  `;
            // document.querySelectorAll('.cart-quantity')[1].textContent =  `  ${val3}  `
            console.log(cartElement.children.length)
            if(cartElement.children.length<3){
                crearbtn();
            }
        }
        
    }

})
 
// paginacion



paginationElement.addEventListener('click',(e)=>{
    console.log(e.target.dataset.pagination)
    let translate = e.target.dataset.pagination
    rootstyle.setProperty('--translate',translate)
})
paginationElement2.addEventListener('click',(e)=>{
    console.log(e.target.dataset.pagination)
    let translate2 = e.target.dataset.pagination
    rootstyle.setProperty('--translate2',translate2)
})











// next and back image



// slideElement.insertAdjacentElement('afterbegin',slideImageslast)



function next (){
    let slideImagesfirst = slideElement.children[0]
    slideElement.style.transform = 'translatex(-200%)';
    slideElement.style.transition = 'all 0.5s ease-in';
    
    setTimeout(function(){
        slideElement.style.transition = 'none'
        slideElement.insertAdjacentElement('beforeend',slideImagesfirst)
        slideElement.style.transform = 'translatex(-100%)';
    },600);
}
function back (){
    let slideImages = slideElement.children
    let slideImagesfirste = slideElement.children
    let slideImageslast = slideImagesfirste[slideImagesfirste.length-1]
    slideElement.style.transform = 'translatex(0%)';
    slideElement.style.transition = 'all 0.5s ease-in';
    
    setTimeout(function(){
        slideElement.style.transition = 'none'
        slideElement.insertAdjacentElement('afterBegin',slideImageslast)
        slideElement.style.transform = 'translatex(-100%)';
    },600);
}
btnNext.addEventListener('click',()=>{

   next();

})
btnBack.addEventListener('click',()=>{

   back();
    
})

btnNext2.addEventListener('click',()=>{

    let slideImagesfirst1 = slideElement2.children[0]
    slideElement2.style.transform = 'translatex(-200%)';
    slideElement2.style.transition = 'all 0.5s ease-in';
    
    setTimeout(function(){
        slideElement2.style.transition = 'none'
        slideElement2.insertAdjacentElement('beforeend',slideImagesfirst1)
        slideElement2.style.transform = 'translatex(-100%)';
    },600);
     
 })
 btnBack2.addEventListener('click',()=>{
    // slideElement2.insertAdjacentElement('afterbegin',slideImageslast3)
// 
    let slideImages = slideElement2.children
    let slideImagesfirste = slideElement2.children
    let slideImageslast = slideImagesfirste[slideImagesfirste.length-1]
    slideElement2.style.transform = 'translatex(0%)';
    slideElement2.style.transition = 'all 0.5s ease-in';
    
    setTimeout(function(){
        slideElement2.style.transition = 'none'
        slideElement2.insertAdjacentElement('afterBegin',slideImageslast)
        slideElement2.style.transform = 'translatex(-100%)';
    },600);
 })
// setInterval(function(){
//     next();
// },4000);


// menu show / unshow
toggleElement.addEventListener('click',(e)=>{
    menuElement.classList.toggle('show')
    toggleElement.children[0].classList.toggle('menu-fixed')
    if(toggleElement.children[0].src.includes('images/icon-menu.svg')){
        toggleElement.children[0].src = ('images/icon-close.svg')
    }else{
        toggleElement.children[0].src = ('images/icon-menu.svg')
    }
})
// cart show - unshow
toggleCart.addEventListener('click',(e)=>{
    cartElement.classList.toggle('show-cart')
    if(toggleCart.children[0].style.filter == ""){
        toggleCart.children[0].style.filter = "invert(0)brightness(0)";
    }
    else{
        toggleCart.children[0].removeAttribute('style','filter:"invert(0)brightness(0)"')
        console.log(toggleCart.children[0].style.filter)
    }
})

// input formulario


incremenButton.addEventListener('click', (e)=>{
    console.log(inputElement.value)
    let inputValue = parseInt(inputElement.value)
    inputValue += parseInt(1);
    inputElement.value = inputValue
    console.log(inputValue)
})
decremenButton.addEventListener('click', (e)=>{
    if(inputElement.value==0){
        inputElement.value = parseInt(0)
        console.log(inputElement.value)
    }
    else{
        let inputValue = parseInt(inputElement.value)
        inputValue -= parseInt(1);
        inputElement.value = inputValue
        console.log(inputValue)
    }
        
})

