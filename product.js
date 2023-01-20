let product = [
    {id:1 , name:"پرسیل" , price:1_000_000 , img :"6.jpg" , filter: 10},
    {id:2 , name:"جام" , price:2_000_000 , img :"2.jpg" , filter: 20},
    {id:3 , name:"گلرنگ" , price:4_000_000 , img :"3.jpg" , filter: 40},
    {id:4 , name:"خودم" , price:3_000_000 , img :"4.jpg" , filter: 30},
    {id:5 , name:"خودت" , price:2_000_000 , img :"5.jpg" , filter: 20},
]

let href = location.search
let url = new URLSearchParams(href)
let end = url.get('id')


let find = product.find(product =>{
    if(product.id == end){
        return product
    }
})
document.body.innerHTML = `
<div class="wrapper">
  <svg class="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,0 100,100 0,100"/>
  </svg>
  <div class="card-container">
    <div class="card-body">
      <div class="side side-back">
        <div class="container-fluid">
          <div class="row">
            <div class="product-image col-5">
              <img src=${find.img} alt="Shoes" />
            </div>
            <div class="features col-7">
              <ul>
                <li>
                  M Select™ DRY seals out water and lets moisture escape so you stay dry when you're on the move 
                </li>
                <li>
                Performance suede leather and mesh upper
                </li>
                <li>
                Bellows, closed-cell foam tongue keeps moisture and debris out 
                </li>
                <li>
                Protective rubber toe cap 
                </li>
                <li>
                Breathable mesh lining 
                </li>
                <li>
                Molded nylon arch shank 
                </li>
                <li>
                Merrell air cushion in the heel absorbs shock and adds stability 
                </li>
                <li>
                Weight: 2lbs 1oz / 940G
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="side side-front">
        <div class="container-fluid">
          <div class="row">
            <div class="product-image col-12 col-lg-5">
              <img src=${find.img} alt="Shoes" />
            </div>
            <div class="content col-12 col-lg-7">
            <center>
            <h2>${find.name}</h2>

            </center>
              <div class="price-rating">
                <div class="price">
                  <h3>:قیمت</h3>
                  <p>ريال${find.price}</p>
                </div>
                <div class="rating">
                  <h3>میزان رضایت : <span class="rating-text">4.5</span></h3>
                  <div id="rateYo">
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <div class="details">
                <p>
                Experience out-of-the-box comfort in this waterproof hiker. With durable leathers, a supportive footbed, and Vibram® traction, all in a versatile package, you won't doubt why Moab stands for Mother-Of-All-Boots™.
                </p>
                <P id="warning">توجه تعداد سفارش باید بالای ${find.filter} عدد باشد</p>
              </div>
              <div class="button" onclick="call1()">خرید</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

`
function call1(){
location.href = 'tel:+989138131173'
console.log(5)
}