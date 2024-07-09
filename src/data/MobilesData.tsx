import img1 from '../assets/electronics/phones/huawei nova 7i.jfif'
import img2 from '../assets/electronics/phones/huawei p30 pro.jfif'
import img3 from '../assets/electronics/phones/iphone 11.jpg'
import img4 from '../assets/electronics/phones/iphone 13 pro max.webp'
import img5 from '../assets/electronics/phones/iphone 15pro max.jfif'
import img6 from  '../assets/electronics/phones/iphone 7 plus.webp'
import img7 from  '../assets/electronics/phones/iphone12pro max.jfif'
import img8 from '../assets/electronics/phones/oneplus 9.jpg'
import img9 from '../assets/electronics/phones/oppo a 16.jpg'
import img10 from '../assets/electronics/phones/oppo reno 6.jpg'
import img11 from '../assets/electronics/phones/samsung note 10.jpg'
import img12 from '../assets/electronics/phones/samsung note 20.jfif'
import img13 from '../assets/electronics/phones/samsung s20.webp'
import img14 from '../assets/electronics/phones/xiaomi note 10.jpg'
interface Mobile{
    id:string;
    name:string;
    img:string;
    price :number;
    stock: number;
    shipping :boolean;
    color:string;
    type:string
}
// {
//     id:,
//     name:,
//     img:,
//     price:,
//     stock:,
//     shipping:,
//     color:,
// },
export const Mobiles:Mobile[] = [
    {
        id:'1-m',
        name:'huawei nova',
        img:img1,
        price:150,
        stock:15,
        shipping:true,
        color:'bg-blue-500', type:'mobile'
    },
    
    {
        id:'2-m',
        name:'huawei p30 pro',
        img:img2,
        price:250,
        stock:19,
        shipping:false,
        color:'bg-yellow-500', type:'mobile'
    },
    
    {
        id:'3-m',
        name:'iphone 11',
        img:img3,
        price:420,
        stock:7,
        shipping:true,
        color:'bg-blue-500', type:'mobile'
    },
    
    {
        id:'4-m',
        name:'iphone 13 pro max',
        img:img4,
        price:850,
        stock:3,
        shipping:false,
        color:'bg-yellow-500', type:'mobile'
    },
    
    {
        id:'5-m',
        name:'iphone 15pro max',
        img: img5,
        price:1300,
        stock:32,
        shipping:true,
        color:'bg-blue-500', type:'mobile'
    },
    {
        id:'6-m',
        name:'iphone 7 plus',
        img:img6,
        price:170,
        stock:24,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
    },
    {
        id:'7-m',
        name:'iphone12pro max',
        img:img7,
        price:1100,
        stock:9,
        shipping:false,
        color:'bg-blue-500', type:'mobile'
    },
    {
        id:'8-m',
        name:'oneplus 9',
        img:img8,
        price:700,
        stock:4,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
    },
    {
        id:'9-m',
        name:'oppo a 16',
        img:img9,
        price:170,
        stock:45,
        shipping:true,
        color:'bg-blue-500', type:'mobile'
    },
    {
        id:'10-m',
        name:'oppo reno 6',
        img:img10,
        price:420,
        stock:17,
        shipping:false,
        color:'bg-yellow-500', type:'mobile',
        
    },
    {
        id:'11-m',
        name:'samsung note 10',
        img:img11,
        price:940,
        stock:16,
        shipping:false,
        color:'bg-blue-500', type:'mobile'
    },
    {
        id:'12-m',
        name:'samsung note 20',
        img:img12,
        price:1200,
        stock:2,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
    },
    {
        id:'13-m',
        name:'samsung s20',
        img:img13,
        price:850,
        stock:11,
        shipping:true,
        color:'bg-blue-500', type:'mobile'
    },
    {
        id:'14-m',
        name:'xiaomi note 10',
        img:img14,
        price:250,
        stock:24,
        shipping:true,
        color:'bg-yellow-500', type:'mobile'
    },

]