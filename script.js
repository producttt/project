let product = [
    {id:1 , name:"پرسیل" , price:1_000_000 , img :"6.jpg" , filter: 10},
    {id:2 , name:"جام" , price:2_000_000 , img :"2.jpg" , filter: 20},
    {id:3 , name:"گلرنگ" , price:4_000_000 , img :"3.jpg" , filter: 40},
    {id:4 , name:"خودم" , price:3_000_000 , img :"4.jpg" , filter: 30},
    {id:5 , name:"خودت" , price:2_000_000 , img :"5.jpg" , filter: 20},
]
let row1 = document.querySelector('.row1')
product.forEach(product =>{
row1.innerHTML += `
<div class='product--blue'>
<div class='product_inner'>
  <img src=${product.img} width='300'>
  <h1>${product.name}</h1>
  <p id="p">برای اطلاعات بیشتر کلیک کنید</p>
  <button  onclick="productbuy(${product.id})">اطلاعات بیشتر</button>
</div>
<div class='product_overlay'>
  <h2>Added to basket</h2>
  <i class='fa fa-check'></i>
</div>
</div>`
})
console.log('first')
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
function productbuy(id){
    location.href = "product.html?id="+id
    console.log(id)
}