import img1 from '../assets/clothes/t-shirts/Cotton T-Shirt black.jfif'
import img2 from '../assets/clothes/t-shirts/Green Casual Shirt.jfif'
import img3 from '../assets/clothes/t-shirts/Green Sleeve T-shirt.jfif'
import img4 from '../assets/clothes/t-shirts/J.VER Stretch shirt.jpg'
import img5 from '../assets/clothes/t-shirts/Laguna Beach Sweat Pants.jfif'
import img6 from '../assets/clothes/t-shirts/Polo T-shirt Navy & White.webp'
import img7 from '../assets/clothes/t-shirts/Polo T-shirt Red.jpg'
import img8 from '../assets/clothes/t-shirts/Slim Fit Sweat Pants Black.jfif'
import img9 from '../assets/clothes/t-shirts/Sport T-shirt.webp'
import img10 from '../assets/clothes/t-shirts/Sweat Pants Purple.jpg'
import img11 from '../assets/clothes/t-shirts/Sweat pants - Moss Green.webp'
import img12 from '../assets/clothes/t-shirts/polo T-shirt Solid Color.webp'

interface Clothe{
    id:string;
    name:string;
    img:string;
    price :number;
    stock: number;
    shipping :boolean;
    color:string;
    type:string
}

export const Clothes:Clothe[]=[
    
{
    id:'1-c',
    name:'Cotton T-Shirt black',
    img:img1,
    price:15,
    stock:32,
    shipping:false,
    color:'bg-blue-500',
    type : "clothe"
},

{
    id:"2-c",
    name:'Green Casual Shirt',
    img:img2,
    price:35,
    stock:16,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
},

{
    id:'3-c',
    name:'Green Sleeve T-shirt',
    img:img3,
    price:25,
    stock:31,
    shipping:false,
    color:'bg-blue-500',
    type : "clothe"
},

{
    id:'4-c',
    name:'J.VER Stretch shirt',
    img:img4,
    price:80,
    stock:4,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
},

{
    id:'5-c',
    name:'Laguna Beach Sweat Pants',
    img:img5,
    price:110,
    stock:4,
    shipping:true,
    color:'bg-blue-500',
    type : "clothe"
},

{
    id:'6-c',
    name:'Polo T-shirt Navy & White',
    img:img6,
    price:49,
    stock:15,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
},

{
    id:'7-c',
    name:'Polo T-shirt Red',
    img:img7,
    price:35,
    stock:16,
    shipping:true,
    color:'bg-blue-500',
    type : "clothe"
},

{
    id:'8-c',
    name:'Sweat Pants Black',
    img:img8,
    price:25,
    stock:24,
    shipping:false,
    color:'bg-yellow-500',
    type : "clothe"
},

{
    id:'9-c',
    name:'Sport T-shirt',
    img:img9,
    price:27,
    stock:12,
    shipping:false,
    color:'bg-blue-500',
    type : "clothe"
},

{
    id:'10-c',
    name:'Sweat Pants Purple',
    img:img10,
    price:30,
    stock:16,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
},
{
    id:'11-c',
    name:'Sweat pants - Moss Green',
    img:img11,
    price:38,
    stock:7,
    shipping:true,
    color:'bg-blue-500',
    type : "clothe"
},
{
    id:'12-c',
    name:'polo T-shirt Solid',
    img:img12,
    price:35,
    stock:27,
    shipping:true,
    color:'bg-yellow-500',
    type : "clothe"
},

]