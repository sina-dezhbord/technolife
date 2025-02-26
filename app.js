// استفاده از کلاس های swiper js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
      delay: 2500,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
      delay: 2500,
    },
  },
  delay: 2500,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
      delay: 2500,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// اتمام استفاده از کلاس های swiper js 

// باز شدن زیر منو های گوشی


let myMenu = document.querySelector(".myMenu");
let bgMenu = document.querySelector(".bgMenu");
let bars = document.querySelector(".bars");
let x = document.querySelector(".fa-x");
// غیب شدن سایدبار
bgMenu.addEventListener("click", function () {
  myMenu.classList.add("right-[-100%]");
  myMenu.classList.remove("right-[0%]");
  bgMenu.classList.add("right-[-100%]");
  bgMenu.classList.remove("right-[0%]");
});
// ظاهر شدن سایدبار
bars.addEventListener("click", function () {
  myMenu.classList.remove("right-[-100%]");
  myMenu.classList.add("right-[0%]");
  bgMenu.classList.remove("right-[-100%]");
  bgMenu.classList.add("right-[0%]");
});
// غیب شدن سایدبار با دکمه X
x.addEventListener("click", function () {
  myMenu.classList.add("right-[-100%]");
  myMenu.classList.remove("right-[0%]");
  bgMenu.classList.add("right-[-100%]");
  bgMenu.classList.remove("right-[0%]");
});

let myMenuPc = document.querySelector(".myMenuPc");
let subMenuPc = document.querySelector(".subMenuPc");

// banner
let banner = async function () {
  let res = await axios.get("http://localhost:3004/banner");
  let banner = document.querySelector(".banner");
  let bannerImg = document.createElement("img");
  res.data.forEach(function (e) {
    if (window.innerWidth > 1024) {
      if (e.img1) {
        bannerImg.src = e.img1;
      }
    } else {
      if (e.img2) {
        bannerImg.src = e.img2;
      }
    }

    bannerImg.className = "h-[40px] w-full cursor-pointer";
    banner.appendChild(bannerImg);
  });
};

banner();

// logo img in Pc
let logoImg = document.querySelector(".logoImg");
let logo = async function () {
  let img = document.createElement("img");
  img.classList.add("cursor-pointer");
  let res = await axios.get("http://localhost:3004/logo");
  img.src = res.data;
  logoImg.appendChild(img);
};
logo();

// center logo img in mobile
let logoMobile = document.querySelector(".logoMobile");
let logoMobileImg = async function () {
  let img = document.createElement("img");
  img.classList.add("cursor-pointer");
  let res = await axios.get("http://localhost:3004/logo");
  img.src = res.data;
  logoMobile.appendChild(img);
};
logoMobileImg();

// عکس لوگو در منوی گوشی
let logoMenu = document.querySelector(".logoMenu");
let logoMenuImg = async function () {
  let img = document.createElement("img");
  img.classList.add("cursor-pointer");
  let res = await axios.get("http://localhost:3004/logoMenu");
  img.src = res.data;
  logoMenu.appendChild(img);
};
logoMenuImg();



// منو و ساب منوی لپتاب
let divMenu=document.querySelector(".divMenu")

let divMenuContent=async ()=>{
  let body = document.querySelector("body")
  let divBackGround=document.createElement("div")
  divBackGround.className=" w-full h-full bg-[black] fixed top-0 right-[-100%] opacity-80 z-20 hidden lg:flex"
  let res = await axios.get("http://localhost:3004/menu")
  let ulMenu =document.createElement("ul")
  ulMenu.className="flex gap-2 "
  res.data.map(function(e , index){
    let liMenu=document.createElement("li")
    
    // استایل دادن به دسته بندی کالا
    if(index===0){
      liMenu.className="flex items-center flex-col hover:bg-[#F1F8FF] cursor-pointer select-none"
      // استایل بقیه منو
    }else{
      liMenu.className="flex items-center cursor-pointer select-none"
    }
    let myDivMenu=document.createElement("div")
    // رنگ دادن به فروشنده شو
    if(index === 6){
      myDivMenu.className="flex items-center mySubMenu px-2 text-[#223C78]"
      // رنگ دادن به دسته بندی کالا
    }else if(index === 0){
      myDivMenu.className="flex items-center mySubMenu ps-8 gap-2 text-[#666666]"
    }
      // رنگ دادن به بقیه منو
    else{
      myDivMenu.className="flex items-center mySubMenu px-2 gap-2 text-[#666666]"
    }
    let iMenu=document.createElement("i")
    iMenu.className=e.icon
    let pMenu=document.createElement("p")
    pMenu.textContent=e.text


    body.appendChild(divBackGround)
    // ساختن زیر منوی اصلی
    if(index===0){
    let divSubMenu=document.createElement("div")
    divSubMenu.className="fixed bottom-0 right-0 z-30"
    let ul = document.createElement("ul")
    ul.className="hidden showMenu overflow-x-auto !h-[calc(100vh-164px)] z-20 shadow-left-sm"
    
// باز شدن ساب منو
    pMenu.addEventListener("click",function(){
      ul.classList.toggle("hidden")      
      divBackGround.classList.toggle("right-[-100%]")
    console.log(ul);

    })
// بسته شدن سابمنو
    divBackGround.addEventListener("click",function(){
      ul.classList.add("hidden")
      divBackGround.classList.add("right-[-100%]")
    })
    
    e.subMenu.map(function(e){
      let li =document.createElement("li")
      li.className="flex h-[50px] hover:bg-[#F3F8FD] bg-white items-center w-[200px]"
      let img = document.createElement("img")
      img.src=e.img
      let p=document.createElement("p")
      p.textContent=e.text
      li.appendChild(img)
      li.appendChild(p)
      ul.appendChild(li)
      divSubMenu.appendChild(ul)
      myDivMenu.appendChild(divSubMenu)

      
// ایجاد و استایل دادن زیر منوی ساب منو ها

// وقتی موس وارد لیست ساب منو شد زیرمنوی ساب منو نمایش داده شود
      li.addEventListener("mouseenter",function(){
        let subOfSubMenu = document.createElement("div")
        subOfSubMenu.className="showMenu overflow-x-auto !h-[calc(100vh-164px)] z-0 right-[216px] fixed bottom-0 bg-white w-[300px] flex flex-col items-center"
        let ulsubOfSubMenu=document.createElement("ul")
        ulsubOfSubMenu.className="flex flex-col"
        let titleP=document.createElement("p")
        titleP.className="bg-[#F3F8FD] w-[223px] py-4"
        titleP.textContent=p.textContent

        // اتصال ساب منوی زیر منو به زیر منو
        e.li.map(function(elem){  
          let liSubOfSubMenu=document.createElement("li")
          liSubOfSubMenu.textContent=elem.text
          liSubOfSubMenu.className="flex h-[44px] hover:bg-[#F3F8FD] bg-white items-center px-4 mt-4"
          ulsubOfSubMenu.appendChild(liSubOfSubMenu)
          subOfSubMenu.appendChild(titleP)
          subOfSubMenu.appendChild(ulsubOfSubMenu)
        })       

        // بستن زیر منوی ساب منو در صورت بسته شدن ساب منو
        divSubMenu.appendChild(subOfSubMenu)
        divBackGround.addEventListener("click",function(){
          subOfSubMenu.remove();
        })
        // در صورت زدن دکمه ی دسته بندی محصولات هم حذف میشه
        pMenu.addEventListener("click",function(){
          subOfSubMenu.remove();
        })
       }) 
       
      
 
    })    
    }

    myDivMenu.appendChild(iMenu)
    myDivMenu.appendChild(pMenu)
    liMenu.appendChild(myDivMenu)
    ulMenu.appendChild(liMenu)
    divMenu.appendChild(ulMenu)
    
  })
  
}
divMenuContent()




// منوی موبایل بخش بالایی
let partOne = document.querySelector(".partOne");
let mbMenuContent = async () => {
  let res = await axios("http://localhost:3004/mbMenu");
  res.data.map(function (e) {
    let li = document.createElement("li");
    let i = document.createElement("i");
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    li.className = "flex items-center gap-2 px-8 select-none cursor-pointer";
    p.className = "text-[18px]";
    i.className = e.icon;
    p.textContent = e.text;
    li.append(i);
    li.append(p);
    partOne.appendChild(li);
    partOne.append(hr);
  });
};
mbMenuContent();

// منوی موبایل بخش پایینی(آکاردئونی)
let partTwo=document.querySelector(".partTwo")
let subMenuMobile=async function(){
  let res = await axios.get("http://localhost:3004/submenu")
  res.data.map(function(e){
    let li = document.createElement("li")
    li.className="subMenu h-[27px] overflow-hidden select-none"
    let divTop=document.createElement("div")
    divTop.className="flex items-center gap-2 px-8 justify-between firstSub"
    let p=document.createElement("p")
    p.className="text-[18px]"
    p.textContent=e.text    
    let i =document.createElement("i")
    i.className="fa-solid fa-chevron-down"
    let divBottom=document.createElement("div")
    divBottom.className="flex items-center gap-2 px-12 bg-[#F3F8FD]"
    let ul = document.createElement("ul")
    ul.className="flex flex-col gap-2 py-4"
    e.li.map(function(elem){
      let subLi = document.createElement("li")
      let subA = document.createElement("a")
      subA.href="#"
      subA.textContent=elem.text
      subLi.appendChild(subA)
      ul.append(subLi)
    })
    divTop.appendChild(p)
    divTop.appendChild(i)
    divBottom.appendChild(ul)
    li.appendChild(divTop)
    li.appendChild(divBottom)
    partTwo.appendChild(li)   

    // باز و بسته شدن زیر منوی موبایل
    li.addEventListener("click",function(){
      li.classList.toggle("h-[27px]")
    })
    
  })

}
subMenuMobile()


// ایجاد اولین سوییپر
let swiperOne = document.querySelector("section.one .swiper-wrapper");
let swiperOneContent = async () => {
  let res = await axios.get("http://localhost:3004/swiperOne");
  res.data.map(function (e) {
    let divLg = document.createElement("div");
    let divMb = document.createElement("div");
    let swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide cursor-pointer";
    let imgLg = document.createElement("img");
    let imgMb = document.createElement("img");
    divLg.className = "lg:flex hidden";
    divMb.className = "lg:hidden flex";
    imgLg.src = e.img1;
    imgMb.src = e.img2;
    divLg.appendChild(imgLg);
    divMb.appendChild(imgMb);
    swiperSlide.appendChild(divLg);
    swiperSlide.appendChild(divMb);
    swiperOne.appendChild(swiperSlide);
  });
};
// صدا زدن فانشن
swiperOneContent();


// ایجاد دومین سوییپر
let swiperTwo = document.querySelector("section.two .swiper-wrapper");
let swiperTwoContent = async () => {
  let res = await axios.get("http://localhost:3004/swiperTwo");
  res.data.map(function (e) {
    let div = document.createElement("div");
    div.className = "swiper-slide flex flex-col gap-4 cursor-pointer";
    let img = document.createElement("img");
    img.src = e.img;
    img.className =
      "w-[112px] border-[2px] rounded-full p-2 border-[#14A0DE] hover:border-[5px]";
    let p = document.createElement("p");
    p.textContent = e.text;
    div.appendChild(img);
    div.appendChild(p);
    swiperTwo.appendChild(div);
  });
};
// صدا زدن فانشن
swiperTwoContent();

let swiperThree = document.querySelector("section.three .swiper-wrapper");

// ساختن سوییپر سوم
let swiperContent = async function (url, swiper) {
  let res = await axios.get(url);
  res.data.map(function (e) {



    let div = document.createElement("div");
    div.className =
      "swiper-slide flex flex-col gap-3 border-l-[2px] pl-2 cursor-pointer";

    let divTop = document.createElement("div");

    let text = document.createElement("p");
    text.className = "text-[15px]";
    text.textContent = "تکنوآف";
    let time = document.createElement("p");
    time.textContent = "00:00:00";
    time.className = "text-[15px]";
    divTop.appendChild(text);
    divTop.appendChild(time);

    let divImg = document.createElement("div");
    let img = document.createElement("img");
    img.className = "w-[186px]";
    img.src = e.img;
    divImg.appendChild(img);

    let divBottom = document.createElement("div");
    divBottom.className = "flex flex-col";
    let divTitle = document.createElement("div");
    divTitle.className = "px-4";
    let title = document.createElement("p");
    title.className = "lg:text-[14px] text-[12px] px-[15px] noMoreTexts";
    title.textContent = e.name;

    let divPrice = document.createElement("div");
    divPrice.className = "w-[200px] mx-auto flex justify-evenly mt-4 px-[10px]";
    let pPercent = document.createElement("p");

    pPercent.textContent = e.percent;
    let pFirstPrice = document.createElement("p");
    pFirstPrice.className = "lg:text-[15px] text-[10px]";
    pFirstPrice.textContent = e.fPrice;
    let pSecPrice = document.createElement("p");
    pSecPrice.textContent = e.lPrice;


    let flag =e.flag
        // وقتی این ایتم درست باشد ایتم دارای ایتم شگفت انگیز و تخفیف میباشد
    if(flag === true){
      divTop.className="flex justify-between w-full mx-auto border-b-4 p-2 text-[crimson] border-[crimson]"
      pPercent.className ="bg-[crimson] px-3 text-white rounded-sm lg:text-[15px] text-[10px]"
      pSecPrice.className ="mx-auto ps-[60px] text-[#919EBC] line-through lg:text-[15px] text-[10px]"
    }
    // در صورت درست نبودن ایتم های بالا را ندارد
    else{
      divTop.className="flex justify-between w-full mx-auto border-b-4 p-2 text-[crimson] border-[crimson] opacity-0"
      pPercent.className ="bg-[crimson] px-3 text-white rounded-sm lg:text-[15px] text-[10px] opacity-0"
      pSecPrice.className ="mx-auto ps-[60px] text-[#919EBC] line-through lg:text-[15px] text-[10px] opacity-0"
    }
    

    divPrice.appendChild(pPercent);
    divPrice.appendChild(pFirstPrice);
    divTitle.appendChild(title);
    divBottom.appendChild(divTitle);
    divBottom.appendChild(divPrice);
    divBottom.appendChild(pSecPrice);
    div.appendChild(divTop);
    div.appendChild(divImg);
    div.appendChild(divBottom);
    swiper.appendChild(div);
  });

  // صدا زدن کوتاه کننده متن
  applyTruncateText();
};

//  تابعی برای کوتاه کردن متن‌ها
function applyTruncateText() {
  const noMoreTexts = document.querySelectorAll(".noMoreTexts");
  noMoreTexts.forEach((element) => {
    const originalText = element.innerHTML;
    const truncatedText = truncateSentence(originalText, 25);
    element.innerHTML = truncatedText;
  });
}

//  تابع کوتاه کردن متن
function truncateSentence(sentence, num) {
  const sentenceWithoutSpaces = sentence.replace(/\s/g, "");
  if (sentenceWithoutSpaces.length > num) {
    let count = 0;
    let truncated = "";
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        count++;
      }
      truncated += sentence[i];
      if (count === num) {
        truncated += "...";
        break;
      }
    }
    return truncated;
  }
  return sentence;
}

// سوییپر تکنو آف
swiperContent("http://localhost:3004/swiperThree", swiperThree);

let four = document.querySelector(".four");
let adImg = async (url, sec) => {
  let res = await axios.get(url);
  res.data.map(function (e) {
    let img = document.createElement("img");
    img.className = "rounded-md flex-1 h-auto lg:w-[33%] cursor-pointer";
    img.src = e.img;
    sec.appendChild(img);
  });
};
adImg("http://localhost:3004/secFour", four);

//پرچم داران هوشمند (استفاده از  سوییپر تکنو آف)
let swiperFive = document.querySelector("section.five .swiper-wrapper");
swiperContent("http://localhost:3004/swiperFive", swiperFive);

let imgContent = async (name, sec, url) => {
  //  برترین های موبایل 6 + بهترین های لپتاب 8
  let divBestMobiles = document.createElement("div");
  divBestMobiles.className = "flex justify-center text-[26px] font-bold ";
  let pBestMobiles = document.createElement("p");
  pBestMobiles.textContent = name;
  divBestMobiles.appendChild(pBestMobiles);
  sec.append(divBestMobiles);
  // عکس های موبایل های برتر
  let res = await axios.get(url);
  let divGrid = document.createElement("div");
  divGrid.className =
    "grid grid-cols-12 gap-4 lg:flex lg:items-center lg:justify-evenly ";
  res.data.map(function (e, index) {
    let div = document.createElement("div");

    if (index === 3) {
      div.className = "col-span-4 flex flex-col items-center col-start-3 ";
    } else {
      div.className = "col-span-4 flex flex-col items-center ";
    }
    let img = document.createElement("img");
    img.className = "w-[180px] cursor-pointer";
    img.src = e.img;
    let p = document.createElement("p");
    p.textContent = e.text;
    div.appendChild(img);
    div.appendChild(p);
    divGrid.appendChild(div);
    sec.appendChild(divGrid);
  });
};
//
// وصل شدن به سکشن ششم(برترین های موبایل)
let six = document.querySelector("section.six");
imgContent("برترین های موبایل", six, "http://localhost:3004/BestMobiles");

let pcGif = document.querySelector(".pcGif");
let pcGifContent = async () => {
  let res = await axios.get("http://localhost:3004/pcGif");
  res.data.map(function (e) {
    let img = document.createElement("img");
    img.src = e.img;
    img.className = "rounded-lg w-full";
    pcGif.appendChild(img);
  });
};
pcGifContent();

// لپتاب ها در تکنولایف (استفاده از  سوییپر تکنو آف)
let swiperSeven = document.querySelector("section.seven .swiper-wrapper");
swiperContent("http://localhost:3004/swiperSeven", swiperSeven);

// بهترین های لپتاب (استفاده از بهترین های موبایل)
let eight = document.querySelector(".eight");
imgContent("برترین های لپتاب", eight, "http://localhost:3004/BestLaptop");

let nine = document.querySelector(".nine");
adImg("http://localhost:3004/secNine", nine);

let secTenOne = document.querySelector(".secTenOne");
let secTenTwo = document.querySelector(".secTenTwo");

// سکشن دهم ویژگی
let secTenContent = async (url, name) => {
  let res = await axios.get(url);
  res.data.map(function (e , index) {
    let p = document.createElement("p");
    
    if (index===0 && name === secTenOne){      
     p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px]"
    }else if (index ===1 && name === secTenOne){
      p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px] bg-[#E8F6FC]"
    }else if (index ===2 && name ===secTenOne){
      p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px] bg-[#D0ECF8]"
    }else if (index ===3 && name ===secTenOne){
      p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px] bg-[#B9E3F5]"
    }else if (index ===4 && name ===secTenOne){
      p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px] bg-[#A1D9F2]"
    }else if(index ===5 && name ===secTenOne){
      p.className="col-span-4 border border-[#D0ECF8] cursor-pointer p-2 text-[12px] lg:text-[18px] bg-[#8AD0EF]"
    }else{
      p.className="col-span-4 bg-[#E9ECF2] p-2 cursor-pointer text-[12px] lg:text-[18px]"
    }
    p.textContent = e.text;
    name.appendChild(p);
  });
};
secTenContent("http://localhost:3004/secTenOne", secTenOne);
secTenContent("http://localhost:3004/secTenTwo", secTenTwo);

let imgElevenContent = async (name, sec, url) => {
  //  برترین های هندزفری
  let divBestMobiles = document.createElement("div");
  divBestMobiles.className = "flex justify-center text-[26px] font-bold";
  let pBestMobiles = document.createElement("p");
  pBestMobiles.textContent = name;
  divBestMobiles.appendChild(pBestMobiles);
  sec.append(divBestMobiles);
  // عکس های هندزفری های برتر
  let res = await axios.get(url);
  let divGrid = document.createElement("div");
  divGrid.className = "grid grid-cols-12 gap-4 justify-items-center";
  res.data.map(function (e,index) {
    let div = document.createElement("div");
 
    if(index===6){
      div.className = "col-span-12  flex flex-col items-center cursor-pointer";
    }else{
      div.className = "lg:col-span-2 col-span-4  flex flex-col items-center cursor-pointer"
    }
    let img = document.createElement("img");
    img.className = "max-w-[106px] lg:max-w-none";
    img.src = e.img;
    let p = document.createElement("p");
    p.textContent = e.text;
    div.appendChild(img);
    div.appendChild(p);
    divGrid.appendChild(div);
    sec.appendChild(divGrid);
  });
};

let eleven = document.querySelector("section.eleven");
imgElevenContent(
  "برترین های هندزفری",
  eleven,
  "http://localhost:3004/BestAirpods"
);

let twelve = document.querySelector(".twelve");
adImg("http://localhost:3004/secTwelve", twelve);

let swiperThirteen = document.querySelector(".swiperThirteen");
let swiperThirteenContent = async () => {
  let res = await axios.get("http://localhost:3004/swiperThirteen");
  res.data.map(function (e) {
    let div = document.createElement("div");
    div.className = "swiper-slide cursor-pointer border-r-[1px] flex";
    let img = document.createElement("img");
    img.className = "w-[170px] h-[100px]";
    img.src = e.img;
    div.appendChild(img);
    swiperThirteen.appendChild(div);
  });
};
swiperThirteenContent();

let swiperFourteen = document.querySelector("section.fourteen .swiper-wrapper");
swiperContent("http://localhost:3004/swiperFourteen", swiperFourteen);

let fifteen = document.querySelector("section.fifteen div.grid");

let fifteenContent = async () => {
  let res = await axios.get("http://localhost:3004/fifteen");
  res.data.forEach(function (e) {
    let div = document.createElement("div");
    div.className = "relative";

    let img = document.createElement("img");
    img.className = "mx-auto lg:p-8 p-2 imgListener";
    img.src = e.img;

    let p = document.createElement("p");
    p.className =
      "absolute bottom-[35px] right-[50%] translate-x-[50%] text-white opacity-0 eventListener transition-all ease-linear duration-200 text-center";
    p.style.textShadow = "-1px -1px 1px black";
    p.textContent = e.text;

    div.appendChild(img);
    div.appendChild(p);
    fifteen.appendChild(div);
  });
  listener();
};

fifteenContent();

let listener = function () {
  let imgListeners = document.querySelectorAll(".imgListener");
  let eventListeners = document.querySelectorAll(".eventListener");

  imgListeners.forEach((img, index) => {
    img.addEventListener("mouseover", function () {
      if (window.innerWidth > 1024) {
        eventListeners[index].classList.remove("opacity-0");
        eventListeners[index].classList.add("opacity-[100%]");
      }
    });

    img.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1024) {
        eventListeners[index].classList.add("opacity-0");
        eventListeners[index].classList.remove("opacity-[100%]");
      }
    });
  });
};

let sixteen = document.querySelector(".sixteen");
adImg("http://localhost:3004/secSixteen", sixteen);

let swiperSeventeen = document.querySelector(
  "section.seventeen .swiper-wrapper"
);
swiperContent("http://localhost:3004/swiperSeventeen", swiperSeventeen);

let swipeEeighteen = document.querySelector("section.eighteen .swiper-wrapper");
swiperContent("http://localhost:3004/swipeEeighteen", swipeEeighteen);

let click2hidden = function () {
  let clickToHidden = document.querySelectorAll(".clickToHidden");
  clickToHidden.forEach(function (e) {
    e.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        e.classList.toggle("h-[24px]");
      }
    });
  });
};

let myFooter = document.querySelector(".myFooter");

let myFooterContent = async function () {
  try {
    let res = await axios.get("http://localhost:3004/footerMenu");
    let ul = document.createElement("ul");
    ul.className = "flex flex-col gap-4 lg:grid lg:grid-cols-3";

    res.data.forEach(function (e) {
      let li = document.createElement("li");
      li.className = "cursor-pointer lg:cursor-default flex flex-col  overflow-hidden lg:overflow-visible px-5 clickToHidden h-[24px] lg:h-auto";

      let div = document.createElement("div");
      div.className = "flex justify-between text-white";

      let p = document.createElement("p");
      p.className="lg:mx-auto lg:font-extrabold"
      p.textContent = e.text;

      let i = document.createElement("i");
      i.className = "fas fa-angle-down lg:hidden";

      let subUl = document.createElement("ul");
      subUl.className = "px-5 text-white text-[10px] flex flex-col gap-3 py-3";

      e.subMenu.forEach(function (elem) {
        let subLi = document.createElement("li");
        subLi.className="lg:mx-auto"
        let subA = document.createElement("a");
        subA.href="#"
        subA.textContent = elem.li;

        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });

      div.appendChild(p);
      div.appendChild(i);
      li.appendChild(div);
      li.appendChild(subUl);

      ul.appendChild(li); 
    });

    myFooter.appendChild(ul); 
    click2hidden();
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
  }
};

myFooterContent();