import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model' ;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[
    {
      productTitle:'Apple iPhone XR (Blue, 256 GB)',
      description  :" ₹74990",
      productimage:"https://i.gadgets360cdn.com/large/Maple_iPhone_discounts_small_1611321831790.jpg?downsize=278:209&output-quality=80"
    },
    {
      productTitle:'iPhone 12 (Purple, 128GB Storage)',
     description:" ₹84900",
      productimage:"https://devguider.com/devs/569_foto_2.jpg"
    },
    {
      productTitle:'Samsung Galaxy F62 (Green, 128GB Storage)',
      description:"₹25999",
      productimage:"https://i.gadgets360cdn.com/large/samsung_galaxy_s21_cover_small_1610085799768.jpg?downsize=278:209&output-quality=80"
    },
    {
      productTitle:'Realme 8 (Cyber Black,128GB Storage)',
      description:"₹14999",
      productimage:"https://lh3.googleusercontent.com/proxy/HLvkFnvHd7N70ZGyOLu20yC6t-Fh0Q2QU2GSXd_pfXMjGzHdcAWArVIf_pKv-QkrKV_OpgnxNzOpFTHDxEqKyVbNWEhP6vDLIC5uxfynGght36OlXqErI-PpbA0bl7x00KPX_V0tqPK9_DbeHvV7HG0u_0kpbS3IeaO5=w640"
    },
    {
      productTitle:'Oppo F19 Pro(Classic Silver,128GB Storage)',
      description:"₹21999",
      productimage:"https://i.gadgets360cdn.com/large/Oppo_R9s_1476889457722.jpeg?downsize=278:209&output-quality=80"
    },
    {
      productTitle:'Redmi 9 (Sky Blue,64GB Storage)',
      description:"₹11999",
      productimage:"https://i.gadgets360cdn.com/large/Redmi_Note_10_pro_max_sale_today_small_1615986120485.jpg?downsize=278:209&output-quality=80"
    },
    {
      productTitle:'OnePlus 9 Pro 5G (Stellar Black,128GB Storage)',
      description:"₹64999",
      productimage:"https://lh3.googleusercontent.com/proxy/4QwSBJw84OitoXfSkTYay6bI7qs2d3wYXMkmA5Huv0Ip--qA88oIiqJ323mSefEB_LY2LaVKVett-hwo04gMs63QtGYJNB80gZN93YHLIRGDUc8GtFmNV3rdNKo9xKeeskGfxmeCaB6IAHhXvQCZQD8BoCn2GfKwcLY6fmyo=w1200-h630-p-k-no-nu"
    },
    {
      productTitle:'TECNO Spark 7 (Spruce Green,64 GB Storage)',
      description:"₹11999",
      productimage:"https://i.gadgets360cdn.com/large/infinix_hot_10_play-small_1618821978249.jpg?downsize=278:209&output-quality=80"
    }
  ];

  productsSentByChild=[];
  productCount:number=0;

  getProductDetailsFromChild(productTitle){
    this.productsSentByChild.push(productTitle)
    this.productCount++;
  }

    


  }
