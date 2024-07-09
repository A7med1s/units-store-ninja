import img1 from '../assets/clothes/footwear/Campous.avif'
import img2 from '../assets/clothes/footwear/Forum Mid.avif'
import img3 from '../assets/clothes/footwear/Galaxy 6 W.jpg'
import img4 from '../assets/clothes/footwear/Galaxy 6.avif'
import img5 from '../assets/clothes/footwear/NMD R1.avif'
import img6 from '../assets/clothes/footwear/Nike Elevate 3.jfif'
import img7 from '../assets/clothes/footwear/Nike Kd 17.png'
import img8 from '../assets/clothes/footwear/Nike PH.png'
import img9 from '../assets/clothes/footwear/Stan Smith 80s.jfif'
import img10 from '../assets/clothes/footwear/Stan Smith.jpg'
import img11 from '../assets/clothes/footwear/Superstar Cloud White.jpg'
import img12 from '../assets/clothes/footwear/air jordan blue.png'
interface FootWear{
    id:string;
    name:string;
    img:string;
    price :number;
    stock: number;
    shipping :boolean;
    color:string;
    type : string;
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

export const FootWears:FootWear[] =[
    {
        id:'1-f',
        name:'Campous',
        img:img1,
        price:90,
        stock:14,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
    },
    {
        id:'2-f',
        name:'Forum Mid',
        img:img2,
        price:59,
        stock:7,
        shipping:false,
        color:'bg-yellow-500',
        type : "footwear"
    },
    {
        id:'3-f',
        name:'Galaxy 6 W',
        img:img3,
        price:29,
        stock:5,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
    },
    {
        id:'4-f',
        name:'Galaxy 6',
        img:img4,
        price:34,
        stock:6,
        shipping:true,
        color:'bg-yellow-500',
        type : "footwear"
    },
    {
        id:'5-f',
        name:'NMD R1',
        img:img5,
        price:32,
        stock:16,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
    },
    {
        id:'6-f',
        name:'Elevate 3',
        img:img6,
        price:53,
        stock:7,
        shipping:true,
        color:'bg-yellow-500',
        type : "footwear"
    },
    {
        id:'7-f',
        name:'Nike Kd 17',
        img:img7,
        price:76,
        stock:38,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
    },

    {
        id:'8-f',
        name:'Nike PH',
        img:img8,
        price:75,
        stock:16,
        shipping:false,
        color:'bg-yellow-500',
        type : "footwear"
    },
    {
        id:'9-f',
        name:'Stan Smith 80s',
        img:img9,
        price:25,
        stock:36,
        shipping:true,
        color:'bg-blue-500',
        type : "footwear"
    },
    {
        id:'10-f',
        name:'Stan Smith',
        img:img10,
        price:35,
        stock:5,
        shipping:true,
        color:'bg-yellow-500',
        type : "footwear"
    },
    {
        id:'11-f',
        name:'Superstar Cloud',
        img:img11,
        price:45,
        stock:22,
        shipping:false,
        color:'bg-blue-500',
        type : "footwear"
    },
    {
        id:'12-f',
        name:'air jordan',
        img:img12,
        price:95,
        stock:12,
        shipping:true,
        color:'bg-yellow-500',
        type : "footwear"
    },
]