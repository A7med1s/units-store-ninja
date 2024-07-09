import img1 from '../assets/electronics/laptops/Apple 13 MacBook Air.jfif'
import img2 from '../assets/electronics/laptops/Apple MacBook Air 2020.webp'
import img3 from '../assets/electronics/laptops/Asus Vivobook.jfif'
import img4 from '../assets/electronics/laptops/HUAWEI MateBook D15.jpg'
import img5 from '../assets/electronics/laptops/Huawei Matebook 14.jfif'
import img6 from '../assets/electronics/laptops/asus zenbook.jfif'
import img7 from '../assets/electronics/laptops/dell inspiron 15.jfif'
import img8 from '../assets/electronics/laptops/dell latitude e6440.webp'
import img9 from '../assets/electronics/laptops/hp g7.jfif'
import img10 from '../assets/electronics/laptops/laptop hp probook G9.jpg'
import img11 from '../assets/electronics/laptops/laptop lenovo legion 5.jpeg'
import img12 from '../assets/electronics/laptops/lenovo ideapad 330.webp'


interface Labtop{
    id:string;
    name:string;
    img:string;
    price :number;
    stock: number;
    shipping :boolean;
    color:string;
    type : string;
}

export const Labtops:Labtop[] = [
    {
        id:'1-l',
        name:'Apple 13 MacBook Air',
        img:img1,
         price:2100,
        stock:8,
        shipping:false,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'2-l',
        name:'Apple MacBook Air 2020',
        img:img2,
         price:1700,
        stock:5,
        shipping:true,
       color:'bg-yellow-500', type:'laptop'
        },
    {
        id:'3-l',
        name:'Asus Vivobook',
        img:img3,
         price:500,
        stock:31,
        shipping:true,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'4-l',
        name:'HUAWEI MateBook D15',
        img:img4,
         price:1500,
        stock:18,
        shipping:true,
       color:'bg-yellow-500', type:'laptop'
        },
    {
        id:'5-l',
        name:'Huawei Matebook 14',
        img:img5,
         price:1350,
        stock:15,
        shipping:false,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'6-l',
        name:'asus zenbook',
        img:img6,
         price:760,
        stock:14,
        shipping:true,
       color:'bg-yellow-500', type:'laptop'
        },
    {
        id:'7-l',
        name:'dell inspiron 15',
        img:img7,
         price:1700,
        stock:8,
        shipping:false,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'8-l',
        name:'dell latitude e6440',
        img:img8,
         price:690,
        stock:31,
        shipping:true,
       color:'bg-yellow-500', type:'laptop'
        },
    {
        id:'9-l',
        name:'hp g7',
        img:img9,
         price:1100,
        stock:17,
        shipping:true,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'10-l',
        name:'hp probook G9',
        img:img10,
         price:750,
        stock:11,
        shipping:false,
       color:'bg-yellow-500', type:'laptop'
        },
    {
        id:'11-l',
        name:'lenovo legion 5',
        img:img11,
         price:1250,
        stock:9,
        shipping:true,
        color:'bg-blue-500', type:'laptop'
        },
    {
        id:'12-l',
        name:'lenovo ideapad 330',
        img:img12,
         price:750,
        stock:12,
        shipping:true,
       color:'bg-yellow-500', type:'laptop'
        },
]