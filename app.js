const inspirationsArray = [
    'https://i.pinimg.com/564x/1e/b9/b7/1eb9b780c0362abeb580bfff1271aff2.jpg',
    'https://i.pinimg.com/564x/8f/66/43/8f66432ad73dd44117371704a6737a97.jpg',
    'https://i.pinimg.com/564x/9e/0c/8b/9e0c8b26b3ae48fa9c3a5cd7fd0981ce.jpg',
    'https://i.pinimg.com/564x/6a/ee/c0/6aeec0612a857a9dc455f76a73e192a7.jpg',
    'https://i.pinimg.com/564x/b4/9f/d7/b49fd7ff2119d287dfe5fa63f8acb86c.jpg',
    'https://i.pinimg.com/564x/bc/c1/21/bcc121d4f3c808f3e8760902ed13890e.jpg',
    'https://i.pinimg.com/564x/65/13/80/651380ce0c52c63f77c51532803ead6d.jpg',
    'https://i.pinimg.com/564x/67/a8/31/67a831476251eef1883ac7de0ccc0dc3.jpg',
    'https://i.pinimg.com/564x/fb/8d/c0/fb8dc092f4b3095a7c11ce73732dee4e.jpg',
    'https://i.pinimg.com/564x/d3/cd/40/d3cd40074cd0e0c0468e567718036dc1.jpg',
    'https://i.pinimg.com/564x/60/47/8a/60478a6a71720e48e2bf07addba768e2.jpg',
    'https://i.pinimg.com/564x/29/49/5f/29495fb6fb47ef9009bf30f933095ab6.jpg',
    'https://i.pinimg.com/564x/7c/7f/03/7c7f0375eadb3a6b564436efd7ea9e05.jpg',
    'https://i.pinimg.com/564x/39/8e/14/398e148e9ab78d0bf89aff41c0aeabc8.jpg',
    'https://i.pinimg.com/564x/3b/af/12/3baf12ba030768853aff6dc123b2ff72.jpg',
    'https://i.pinimg.com/564x/b2/1f/d8/b21fd8e1961502e86b21f18d9ccad6ec.jpg',
    'https://i.pinimg.com/564x/4a/66/86/4a66867eb226718ea0df25ca8a24c076.jpg',
    'https://i.pinimg.com/564x/da/42/fa/da42fad80c71e6d0f268b6fcf3001e67.jpg',
    'https://i.pinimg.com/564x/e0/85/db/e085db08bb8489dc5c98eeb33a428098.jpg',
    'https://i.pinimg.com/564x/0e/3b/7a/0e3b7a5654cb9ce7154a555d7685d96c.jpg',
    'https://i.pinimg.com/564x/c1/db/3a/c1db3a9e731c0b2ffede61cd15235a8e.jpg',
    'https://i.pinimg.com/564x/76/d5/45/76d54508c3d7620529a5472b3210b2fd.jpg',
    'https://i.pinimg.com/564x/29/86/9f/29869f4612f39efc0a741135a22f797b.jpg',
    'https://i.pinimg.com/564x/9b/cd/6f/9bcd6fd3db76979d17b34e96c016ac87.jpg'
]

const inspirations = document.querySelector('#inspirationImg');
inspirations.innerHTML = inspirationsArray.map(arr => `<img class="imgInsp" src=${arr}>`).join('');

const testimonialArr=[
    {img:'images/photo1.jpg', note:'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id efficitur magna, non pellentesque diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. '},
    {img:'images/photo2.jpg', note:'Aenean volutpat non elit tempor convallis. Mauris eget metus nisi. Praesent tellus nulla, malesuada vitae vehicula a, vehicula eget est. Etiam mattis mi massa, quis lobortis orci pretium a. Proin venenatis dui quis felis egestas fringilla. '},
    {img:'images/photo3.jpg', note:'Cras in suscipit lacus, eget aliquam magna. Vestibulum porttitor consequat ex, non ultrices justo ullamcorper at. Fusce lacinia vitae lacus vel eleifend. Maecenas ultrices nisl in diam efficitur suscipit. In ac aliquet dolor. '},
    {img:'images/photo4.jpg', note:'Etiam id odio vel elit gravida aliquam. Donec mollis nulla non fringilla sodales. In sed magna a tellus ultrices facilisis vel eu mi. Cras consectetur eget odio a commodo. Integer ac ipsum quis lectus aliquet scelerisque vitae a erat. '},
    {img:'images/photo5.jpg', note:'Quisque interdum vehicula turpis a tristique. Nunc volutpat nunc sit amet leo accumsan finibus. Proin et viverra quam. Donec tincidunt odio turpis, sed condimentum urna convallis at. Sed venenatis malesuada odio, bibendum sodales dui imperdiet at. '},
    {img:'images/photo6.jpg', note:'Aenean mollis arcu leo, rutrum aliquet augue luctus vitae. Duis ipsum odio, dignissim eget sapien non, tempor condimentum nisl. Quisque laoreet dictum dignissim. Donec tincidunt semper ipsum semper gravida. '},
    {img:'images/photo7.jpg', note:'Donec tristique sed purus id posuere. Maecenas nisi tortor, congue eu tempus et, tincidunt quis sem. Suspendisse a lacus at metus dignissim volutpat. Proin mattis eros a sapien vestibulum facilisis. Aenean feugiat egestas arcu, eu vestibulum eros iaculis in.'},
    {img:'images/photo8.jpg', note:'Ut id tellus volutpat, aliquam libero eget, cursus ante. Fusce sagittis porta facilisis. Sed rhoncus massa et purus accumsan pulvinar quis in sem. Vivamus vel egestas sapien, eget auctor purus. Nulla eu arcu interdum, elementum enim non, condimentum nibh. '},
    {img:'images/photo9.jpg', note:'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id magna diam. Nulla laoreet mollis porta. Morbi placerat molestie metus, non mattis risus ornare hendrerit. Morbi et posuere eros, at sodales sapien. '},
    
    
]

const testimonial = document.querySelector('.testimoni');
testimonial.innerHTML = testimonialArr.map(arr => `<div class="testimonial-item"><img class="testimonial-img" src=${arr.img}><div class="testimonial-note">${arr.note}</div></div>`).join('');


const mobileMenu = document.querySelector('.mobile');
const menuFloat = document.querySelector('#floating-menu');
const closeMenu = document.querySelector('#closeMenu');

mobileMenu.addEventListener("click",() => menuFloat.style.display='block');
closeMenu.addEventListener("click",() => menuFloat.style.display='none');

console.log(mobileMenu,menuFloat,closeMenu)