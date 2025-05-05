
// // For sticky header
// window?.addEventListener("scroll", function () {
//     const headerElement = document?.querySelector(".header");
//     const windowScroll = this?.scrollY;
//     if (windowScroll > 0) {
//         headerElement?.classList?.add("active");
//         this.document.querySelector('.top_nav').classList.add('absolute', 'opacity-0')

//         if(windowScroll >= 500){
//             document.querySelector('.bottom_nav').classList.add('absolute', 'opacity-0')
//         }
//         else{
//             document.querySelector('.bottom_nav').classList.remove('absolute', 'opacity-0')
//         }
//     }
   
//     else {
//         headerElement?.classList?.remove("active");
//         document.querySelector('.top_nav').classList.remove('absolute', 'opacity-0')
        
//     }

// });


//tab change
const tabBtns = document.querySelectorAll(".db-tab-btn");
const tabDivs = document.querySelectorAll(".db-tab-div");
tabBtns.forEach((btnItem) => {
    btnItem.addEventListener("click", function() {
       
        const tabTargetSelector = btnItem.getAttribute("data-target");
        const tabTarget = document.querySelector(tabTargetSelector);
        if (!tabTarget) return;
        tabBtns.forEach(tabBtn => tabBtn.classList.remove("active"));
        tabDivs.forEach(tabDiv => tabDiv.classList.remove("active"));
        
        tabTarget.classList.add("active");
        btnItem.classList.add("active");
    });
});


//btn color toggle
function btnColortoggle(label, classname){
    const btns = document.querySelectorAll(label);
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            btns.forEach((button) => button.classList.remove(classname));
            if (!e.target.classList.contains(classname)) {
               e.target.classList.add(classname);
            }
       });
    });
}
btnColortoggle('.size','productdetailsBtn')
btnColortoggle('.color','productdetailsBtn')


//fabourite btn toggle
const btns = document.querySelectorAll('.fabourite');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.currentTarget.lastElementChild) {
            e.currentTarget.lastElementChild.classList.toggle('lab-fill-heart');
        }
        e.currentTarget.classList.toggle('text-highlight-red');
    });
});


//copy coupon code
const couponbtn = document.querySelectorAll('.coupon')
couponbtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        btn.firstChild.classList.add('lab-fill-check')
        btn.firstChild.classList.remove('lab-line-copy')
        btn.lastChild.textContent="Copied"
        setTimeout(function() {
            btn.firstChild.classList.remove('lab-fill-check')
            btn.firstChild.classList.add('lab-line-copy')
            btn.lastChild.textContent="Copy Code"
        }, 2000);
    })
})


//search field show/hide 
const searchopen = document.querySelector('.search-open')
const searchclose = document.querySelector('.search-hide')
searchopen?.addEventListener('click', function(){
    searchopen.parentElement.classList.add('hidden')
    searchclose.parentElement.classList.remove('hidden')
})
searchclose?.addEventListener('click', function(){
    searchopen.parentElement.classList.remove('hidden')
    searchclose.parentElement.classList.add('hidden')
})

//sidebar
const drawerDivs = document?.querySelectorAll(".drawer");
const drawerSets = document?.querySelectorAll("[data-drawer]");
drawerSets?.forEach((drawerSet) => {
    drawerSet?.addEventListener("click", function() {
        const targetElm = document?.querySelector(drawerSet?.dataset?.drawer);      
        drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
        drawerDivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
        targetElm?.classList?.add("active");
        drawerSet?.classList?.add("active");
        document.body.classList.add("overflow-hidden");
    })
})
document?.querySelectorAll(".drawer-close")?.forEach((closeBtn) => {
    closeBtn?.addEventListener("click", function() {
        drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
        drawerDivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));;
        document.body.classList.remove("overflow-hidden");
    })
})
document?.querySelectorAll(".drawer .menu-link")?.forEach((link) => {
    link?.addEventListener("click", function() {
        drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
        drawerDivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
        document.body.classList.remove("overflow-hidden");
    });
});



//dropdown functionality
const dropGroup = document?.querySelectorAll(".dropdown-group");
const dropList = document?.querySelectorAll(".dropdown-list");
const dropBtn = document?.querySelectorAll(".dropdown-btn");
dropBtn?.forEach((btnItem) => {
    btnItem?.addEventListener("click", () => {
        const dropIcon = btnItem.querySelector('.dropdown-icon')
        dropIcon?.classList.add('transition-all', 'duration-300', 'ease-in-out')
        const currentGroup = btnItem?.closest(".dropdown-group");
        const currentBtn = currentGroup?.querySelector(".dropdown-btn");
        const currentList = currentGroup?.querySelector(".dropdown-list");
        const currentActive = currentGroup?.className.includes("active");
        if (currentActive) {
            currentGroup?.classList?.remove("active");
            currentList?.classList?.remove("active");
            currentBtn?.classList?.remove("active");
            dropIcon?.classList.remove('rotate-180')
        }
        else {
            dropGroup?.forEach((groupItem) => {
                if (groupItem?.className?.includes("active")) {
                    groupItem?.classList?.remove("active");
                    groupItem?.querySelector(".dropdown-btn")?.classList?.remove("active");
                    groupItem?.querySelector(".dropdown-list")?.classList?.remove("active");
                    groupItem?.querySelector(".dropdown-icon")?.classList.remove("rotate-180")
                }
            })
            currentGroup?.classList?.add("active");
            currentList?.classList?.add("active");
            currentBtn?.classList?.add("active");
            dropIcon?.classList.add('rotate-180')
           
        }
    })
    
})
document?.addEventListener("click", (event) => {
    dropGroup?.forEach((item) => {
        if (!item?.contains(event?.target)) {
            item?.classList?.remove("active");
            item?.querySelector(".dropdown-btn")?.classList?.remove("active");
            item?.querySelector(".dropdown-list")?.classList?.remove("active");
            item?.querySelector(".dropdown-icon")?.classList.remove('rotate-180');
        }
    })
})


// filter checkbox dropdown
const checkboxes = document.querySelectorAll(".filter");
checkboxes.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const options = btn.nextElementSibling;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        console.log(btn)
        if (isExpanded) {
            options.style.height = '0px';
             options.style.margin="0px 0px 0px 0px"
             btn.querySelector('.icon').classList.remove('lab-line-chevron-up');
            btn.querySelector('.icon').classList.add('lab-line-chevron-down'); 
        } else {
            options.style.height = `${options.scrollHeight}px`;
            options.style.margin="8px 0px 0px 0px"
            btn.querySelector('.icon').classList.remove('lab-line-chevron-down');
            btn.querySelector('.icon').classList.add('lab-line-chevron-up'); 
        }
        btn.setAttribute('aria-expanded', !isExpanded);
    });
});

//see more see less
const showbtn = document.getElementById('showbtn')
const description = document.getElementById('description')
const productreview = document.querySelector('.productreview')
if(description?.scrollHeight>productreview?.clientHeight){
    showbtn.classList.remove('hidden')
    showbtn.addEventListener('click', function(){
        if(!description.classList.contains('description-visible')){
            description.classList.add('description-visible')
            description.querySelector('button').firstElementChild.innerHTML= "See Less"
            description.querySelector('button').lastElementChild.classList.remove('lab-line-chevron-down')
            description.querySelector('button').lastElementChild.classList.add('lab-line-chevron-up')
            showbtn.firstElementChild.classList.remove('description-opacity')
            description.querySelector('p').classList.add('pb-8')
        }
        else{
            description.classList.remove('description-visible')
            description.querySelector('button').firstElementChild.innerHTML= "See More"
            description.querySelector('button').lastElementChild.classList.remove('lab-line-chevron-up')
            description.querySelector('button').lastElementChild.classList.add('lab-line-chevron-down')
            showbtn.firstElementChild.classList.add('description-opacity')
            description.querySelector('p').classList.remove('pb-8')
        }
        
    })
}
else{
    showbtn?.classList.add('hidden')
}


  
// /modal
const modalBtns = document?.querySelectorAll("[data-modal]");
const modalDivs = document?.querySelectorAll(".modal");
const modalClose = document?.querySelectorAll(".modal-close");
modalBtns?.forEach((modalBtn) => {
    modalBtn?.addEventListener("click", function(event) {
        event?.preventDefault();
        const modalTarget = document?.querySelector(modalBtn?.dataset?.modal);
        modalTarget?.classList?.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    })
})
modalClose?.forEach(close => close?.addEventListener("click", function(event) {
    event?.target?.closest(".modal")?.classList?.remove("active");
    document.body.classList.remove("overflow-hidden");
    
}));
function singleGroupActive(parentClass, addedClass) {
    const singleElements = document?.querySelectorAll(parentClass);
    singleElements?.forEach((singleElement) => {
        for (let i = 0; i < singleElement.childElementCount; i++) {
            singleElement?.children[i]?.addEventListener("click", function () {
                for (let a = 0; a < singleElement.childElementCount; a++) singleElement?.children[a]?.classList?.remove(addedClass);
                singleElement?.children[i]?.classList?.add(addedClass);
            })
        }
    })
}
singleGroupActive(".payment-fieldset", "active");
singleGroupActive(".active-group", "active");


//countdown timer
let hours = document.querySelectorAll('#hours');
let minutes = document.querySelectorAll('#minutes');
let seconds = document.querySelectorAll('#seconds');
let hhprogress = document.querySelectorAll('#hh');
let mmprogress = document.querySelectorAll('#mm');
let ssprogress = document.querySelectorAll('#ss');
let endDate = '12/29/2024 23:59:59'; //month/day/year 
let startdate = '11/21/2024 00:00:00'
let x = setInterval(function() {
    let now = new Date().getTime();
    let countDown = new Date(endDate).getTime();
    let startDateMs = new Date(startdate).getTime();
    let distance = countDown - now;
    let difference = countDown- startDateMs;
    let d = Math.floor(distance / (1000 * 60 * 60 * 24))
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + (d*24));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);
    let difference_H = Math.floor(difference  / (1000 * 60 * 60));
    let hourCircle = (160/difference_H)*h
    ;
    hours.forEach(hour=>hour.innerHTML = h + "<br><span>hrs</span>")
    minutes.forEach(minute=>minute.innerHTML = m + "<br><span>min</span>")
    seconds.forEach(second=>second.innerHTML = s + "<br><span>sec</span>")
    hhprogress.forEach(hh=>hh.style.strokeDashoffset = 160- hourCircle)
    mmprogress.forEach(mm=>mm.style.strokeDashoffset = 160 - (160 * m) / 60)
    ssprogress.forEach(ss=>ss.style.strokeDashoffset = 160 - (160 * s) / 60)
    if (distance <0) {
        clearInterval(x);
        hours.forEach(hour=>hour.innerHTML = "00 <br><span>hrs</span>")
        minutes.forEach(minute=>minute.innerHTML = "00 <br><span>min</span>")
        seconds.forEach(second=>second.innerHTML = "00 <br><span>sec</span>")
        
        hhprogress.forEach(hh=>hh.style.strokeDashoffset = hourCircle)
        mmprogress.forEach(mm=>mm.style.strokeDashoffset = 160)
        ssprogress.forEach(ss=>ss.style.strokeDashoffset = 160)
    }
}, 1000);



// CATEGORY MENU DROPDOWN

document.querySelector('#clothing')?.lastElementChild.classList.add('block')
const menudropGroup = document?.querySelectorAll(".menudropdown-group");
const menudropList = document?.querySelectorAll(".menudropdown-list");
const menudropBtn = document?.querySelectorAll(".menudropdown-btn");
menudropBtn?.forEach((btnItem) => {
    btnItem?.addEventListener("click", (event) => {
        const currentGroup = btnItem?.closest(".menudropdown-group");
        const currentBtn = currentGroup?.querySelector(".menudropdown-btn");
        const currentList = currentGroup?.querySelector(".menudropdown-list");
        event.preventDefault()
        document.querySelector('#clothing')?.lastElementChild?.classList.remove('block')
        currentList?.classList?.toggle("category_active");
        currentBtn?.classList?.toggle("category_active");  
        currentBtn?.classList.toggle('text-primary')  
    }) 
},)
document?.addEventListener("click", (event) => {
    menudropGroup?.forEach((item) => {
        if (!item?.contains(event?.target)) {
        item?.querySelector(".menudropdown-btn")?.lastElementChild.classList.remove('rotate-180')
        item?.classList?.remove("category_active");
        item?.querySelector(".menudropdown-btn")?.classList?.remove("category_active", "text-primary");
        item?.querySelector(".menudropdown-list")?.classList?.remove("category_active"); 
        
        }
    })
})


//review product images upload 
var loadFile = function(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      var image = document.createElement('img');
      image.src = URL.createObjectURL(event.target.files[i]);
      image.id = "output-image";
      image.width = "86";
      image.height= "86";
      document.querySelector(".images").appendChild(image);
    }
  };

//upload profile and cover image
var profileimage = function(event, id) {     
  var output = document.getElementById(id);
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};




//accordion
const accordionBtn = document.querySelectorAll(".accordion");
accordionBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const content = btn.lastElementChild;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        console.log(isExpanded)
        if (isExpanded) {
            content.style.height = '0px';
            content.style.margin = "0px 0px 0px 0px"
            btn.classList.remove('text-primary')
            content.classList.add('!text-[#1F1F39]')
            btn.querySelector('.icon').classList.remove('lab-line-minus-cirlce'); 
            btn.querySelector('.icon').classList.add('lab-line-add-circle');
        } else {
            content.style.height = `${content.scrollHeight}px`;
            content.style.margin="16px 0px 0px 0px"
            btn.classList.add('text-primary')
            btn.querySelector('.icon').classList.add('lab-line-minus-cirlce'); 
            btn.querySelector('.icon').classList.remove('lab-line-add-circle');
        }
        btn.setAttribute('aria-expanded', !isExpanded);
    });
});



 const conversationItems = document.querySelectorAll('.conversation-item');
 const chatWindow = document.getElementById('chat-window');
 const conversationList = document.getElementById('conversation-list');
 function openChatWindow() {
   conversationList.classList.add('lg:block','hidden');
   chatWindow.classList.remove('lg:block','hidden');
   document.querySelector('.mbl_nav').classList.add('hidden')
 }
 conversationItems.forEach(item => {
    item.addEventListener('click', function () {
      conversationItems.forEach(i => i.classList.remove('active_chat'));
      item.classList.add('active_chat');
      openChatWindow();
    })
   });


//Swap Phone input and Email Input
   const btn = document.getElementById('input_change');
   document.querySelector('.swap_input')?.lastElementChild.classList.add('hidden')
   btn?.addEventListener('click', function() {
       const label = btn.previousElementSibling;
       const inputEmailElement = btn.parentElement.parentElement.querySelector('.email');
       const inputPhoneElement = btn.parentElement.parentElement.querySelector('.phone');
      console.log(inputEmailElement)
      console.log(inputPhoneElement)

       if (label.textContent == "Phone") {
           label.textContent = "Email";
           label.setAttribute('for',"Email");
           inputEmailElement.classList.remove('hidden')
           inputPhoneElement.classList.add('hidden')
           document.querySelector('.iti').classList.add('hidden')
           btn.textContent = "Use Phone Instead";
       } else {
           label.textContent = "Phone";
           label.setAttribute('for',"Email");
           inputEmailElement.classList.add('hidden')
           inputPhoneElement.classList.remove('hidden')
           document.querySelector('.iti').classList.remove('hidden')
           btn.textContent = "Use Email Instead";
       }
   });


//Handle Product Quantity
   function handleQuantityChange() {
    const quantityContainers = document.querySelectorAll('.quantity_container');

    quantityContainers.forEach(container => {
        const decrementButton = container.querySelector('.decrement');
        const incrementButton = container.querySelector('.increment');
        const quantityInput = container.querySelector('.quantity');

        incrementButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;  
        });

        decrementButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) { 
                quantityInput.value = currentValue - 1;  
            }
        });
    });
}
handleQuantityChange();

//Handle Address Edit and Delete 

const form = document.getElementById('addressForm');
form?.addEventListener('submit', function(e){
    e.preventDefault()
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const countryInput = document.getElementById("countries").value;

    console.log(nameInput, emailInput, countryInput)
})

// star rating

const stars = document.querySelectorAll('.star');
stars.forEach((star) => {
    star.addEventListener('click', function () {
        stars.forEach(star => star.classList.remove('fill'));
        let prevSibling = star;
        while (prevSibling) {
            prevSibling.classList.add('fill');
            prevSibling = prevSibling.previousElementSibling;
        }
        let nextSibling = star.nextElementSibling;
        while (nextSibling) {
            nextSibling.classList.remove('fill');
            nextSibling = nextSibling.nextElementSibling;
        }
    });
});


const addData =(addform, name, email, country, tel, state, city, zip, landmark)=>{
    addform?.addEventListener('submit', function(e){

        let formDataArray = [];
        e.preventDefault()
        const formDataObject = {
            id: `address${Date.now()}` ,
            name: name.value,
            email: email.value,
            country: country.value,
            tel: tel.value,
            state: state.value,
            city: city.value,
            zip: zip.value,
            landmark: landmark.value
        };
        formDataArray.push(formDataObject);  
        addform.reset()
        const allAddress = document.getElementById('address-group');
        formDataArray.forEach((data) => {
    
        let address = document.createElement('label');
        address.setAttribute('for', `${data.id}`);
        address.className = 'cursor-pointer p-3 rounded-xl w-full border border-light bg-light address-label flex gap-2';
        address.innerHTML = `
            <div class="custom-radio sm">
                <input type="radio" id="${data.id}" name="address" class="custom-radio-field">
                <span class="custom-radio-span"></span>
            </div>
            <div class="flex flex-col justify-between w-full">
                <div class="flex flex-col gap-2 text-sm font-medium leading-snug">
                    <span class="font-medium">${data.name}</span>
                    <span class="font-normal">${data.tel}</span>
                    <span class="font-normal">${data.email}</span>
                    <span class="font-normal">${data.country}, ${data.state}, ${data.zip}</span>
                    <span class="font-normal">${data.landmark}</span>
                </div>
            </div>
        `;
        
        allAddress.appendChild(address);
        singleGroupActive(".active-group", "active");
        });
    
    })
}

// const editData =(editform, name, email, country, tel, state, city, zip, landmark)=>{
//     const selectaddress = document.getElementById('address-group').querySelector('.active')
//     console.log(selectaddress)
//     selectaddress.querySelector('.name')
//     console.log(selectaddress.querySelector('.name').textContent)
//     console.log(editform)
//     editform.getElementById('name').value = selectaddress.querySelector('.name')
//     singleGroupActive(".active-group", "active");
  
// }


const name = document.getElementById('name')
const email = document.getElementById('email')
const country = document.getElementById('countries')
const tel = document.getElementById('telephone')
const state = document.getElementById('state')
const city = document.getElementById('city')
const zip = document.getElementById('zip')
const landmark = document.getElementById('landmark')

const editBtn = document.getElementById('editBtn')
const addbtn = document.getElementById('addBtn')
const addressform = document.getElementById('address')?.querySelector('form')
// editBtn.addEventListener('click', function(){
//  addressform.setAttribute('id', "edit")
//  const editform = document.getElementById('add')
//  editData(editform)
// })
addbtn?.addEventListener('click',function(){
 addressform.setAttribute('id',"add")
 const addform = document.getElementById('add')
 addData(addform, name, email, country, tel, state, city, zip, landmark)
})

const deleteAddress = (event)=>{
    const addressCard = (event.target.closest('[data-address]'))
    addressCard.classList.add('hidden')
}


//cookie modal open 

window.addEventListener("DOMContentLoaded", function() {
    const cookieAlert = document.getElementById("cookie");
    const closebtn = document.querySelectorAll(".close-cookie");  // Use querySelector for a specific element
    cookieAlert?.classList.remove("close", "sm:bottom-6");
    // Show the cookie alert after 1 second
    setTimeout(() => {
        cookieAlert?.classList.add("open");
    }, 1000);

    closebtn.forEach((btn)=>{
        btn.addEventListener('click', function() {
        cookieAlert?.classList.remove("open", "sm:bottom-6");
    })
    });
});


//phone number input
var inputs = document.querySelectorAll(".telephone");
inputs.forEach((input)=>{
    window.intlTelInput(input,({
        allowDropdown: true,
        initialCountry: "bd",
        separateDialCode: true,
        autoPlaceholder: "Select country",
        countrySearch: false,
        customPlaceholder: "Select country",
        fixDropdownWidth: true,
        }));
})







   


