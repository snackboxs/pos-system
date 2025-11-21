import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";

export interface Data {
   id: number;
   name: string;
   imgurl: string;
   price: number;
   description: string;
   quantity: number;
   updateTime?: string;
}

export const data: Data[] = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    imgurl: "https://i.pinimg.com/736x/cc/3d/a6/cc3da6d3ac815e62bbfae5b9698942aa.jpg",
    price: 15,
    description: "A fiery chicken burger with fresh lettuce and creamy mayo.A fiery chicken burger with fresh lettuce and creamy mayo.A fiery chicken burger with fresh lettuce and creamy mayo.",
    quantity: 4,
  },
  {
    id: 2,
    name: "Classic Beef Burger",
    imgurl: "https://i.pinimg.com/736x/33/36/4c/33364cacfcf482529729979b62ff29c1.jpg",
    price: 17,
    description: "Juicy grilled beef patty topped with cheddar and pickles.",
    quantity: 6,
  },
  {
    id: 3,
    name: "Veggie Wrap",
    imgurl: "https://i.pinimg.com/736x/08/34/f6/0834f6086df0c0e3a42cbd2bebd874ad.jpg",
    price: 12,
    description: "A healthy wrap packed with veggies and hummus.",
    quantity: 3,
  },
  {
    id: 4,
    name: "Grilled Chicken Sandwich",
    imgurl: "https://i.pinimg.com/1200x/02/ee/a0/02eea05c71f3ac6a2c05d0e0417a0507.jpg",
    price: 14,
    description: "Tender grilled chicken with garlic sauce and lettuce.",
    quantity: 5,
  },
  {
    id: 5,
    name: "BBQ Beef Sub",
    imgurl: "https://i.pinimg.com/1200x/ff/ee/f3/ffeef33919c27a60709189939aad5777.jpg",
    price: 19,
    description: "Smoked beef in BBQ sauce with caramelized onions.",
    quantity: 4,
  },
  {
    id: 6,
    name: "Cheese Loaded Fries",
    imgurl: "https://i.pinimg.com/736x/e2/2a/f0/e22af0da085009e7ed193704234f911b.jpg",
    price: 9,
    description: "Crispy fries topped with melted cheese and herbs.",
    quantity: 11,
  },
  {
    id: 7,
    name: "Chicken Caesar Salad",
    imgurl: "https://i.pinimg.com/736x/48/53/ef/4853eff21b1b0808726031e24eea775b.jpg",
    price: 11,
    description: "Classic Caesar salad with grilled chicken and parmesan.",
    quantity: 3,
  },
  {
    id: 8,
    name: "Pepperoni Pizza Slice",
    imgurl: "https://i.pinimg.com/736x/ae/c4/76/aec476da07c6e0a5965af6d7f7a20c51.jpg",
    price: 7,
    description: "Crispy pizza slice with pepperoni and mozzarella cheese.",
    quantity: 10,
  },
  {
    id: 9,
    name: "Mushroom Alfredo Pasta",
    imgurl: "https://i.pinimg.com/1200x/ce/99/8e/ce998ecc182a98faf12c21c368e533fd.jpg",
    price: 16,
    description: "Creamy Alfredo pasta mixed with sautéed mushrooms.",
    quantity: 4,
  },
  {
    id: 10,
    name: "Fish Tacos",
    imgurl: "https://i.pinimg.com/1200x/8a/5d/2f/8a5d2f406c0883484542a516daac672c.jpg",
    price: 13,
    description: "Soft tacos filled with seasoned grilled fish and slaw.",
    quantity: 6,
  },
  {
    id: 11,
    name: "Teriyaki Chicken Bowl",
    imgurl: "https://i.pinimg.com/1200x/ee/65/fc/ee65fc0e14c42241c46890d2d36a45ce.jpg",
    price: 14,
    description: "Steamed rice bowl topped with teriyaki chicken.",
    quantity: 8,
  },
  {
    id: 12,
    name: "Chocolate Milkshake",
    imgurl: "https://i.pinimg.com/1200x/2d/37/ca/2d37ca6e8fb732a336e922a85ea97902.jpg",
    price: 6,
    description: "Thick chocolate milkshake with whipped cream.",
    quantity: 12,
  },
  {
    id: 13,
    name: "Iced Caramel Latte",
    imgurl: "https://i.pinimg.com/736x/1b/95/aa/1b95aa416a4db4baba408536e189da52.jpg",
    price: 5,
    description: "Cold brew latte mixed with sweet caramel syrup.",
    quantity: 9,
  },
  {
    id: 14,
    name: "Chicken Nuggets",
    imgurl: "https://i.pinimg.com/1200x/f3/c7/f0/f3c7f09d6ab27602824a7e0d2053ed52.jpg",
    price: 8,
    description: "Crunchy fried chicken nuggets served with sauce.",
    quantity: 14,
  },
  {
    id: 15,
    name: "Turkey Club Sandwich",
    imgurl: "https://i.pinimg.com/736x/88/07/18/880718f4d7b84c7cedbfb117e6c42dc5.jpg",
    price: 13,
    description: "A triple-layer sandwich with turkey, bacon, and tomato.",
    quantity: 5,
  },
  {
    id: 16,
    name: "Green Veggie Smoothie",
    imgurl: "https://i.pinimg.com/736x/46/68/59/46685966ebe46146c765727d747d4ff9.jpg",
    price: 7,
    description: "Healthy smoothie made from spinach, mango, and banana.",
    quantity: 7,
  },
  {
    id: 17,
    name: "Chicken Alfredo Pizza",
    imgurl: "https://i.pinimg.com/736x/e1/f4/b2/e1f4b20762cce6baf187e070a9d8f620.jpg",
    price: 20,
    description: "Creamy Alfredo pizza topped with chicken and mushrooms.",
    quantity: 3,
  },
  {
    id: 18,
    name: "Strawberry Cheesecake",
    imgurl: "https://i.pinimg.com/736x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg",
    price: 9,
    description: "Soft cheesecake topped with strawberry glaze.",
    quantity: 8,
  },
  {
    id: 19,
    name: "Buffalo Chicken Wings",
    imgurl: "https://i.pinimg.com/1200x/95/a0/db/95a0dbe9ea3dd6cb31a1cd2fae11c5af.jpg",
    price: 15,
    description: "Spicy buffalo wings with blue cheese dipping sauce.",
    quantity: 6,
  },
  {
    id: 20,
    name: "Tuna Melt",
    imgurl: "https://i.pinimg.com/736x/9e/c3/f5/9ec3f5388c82ac92c7c8074df2e9a3f1.jpg",
    price: 12,
    description: "Grilled tuna melt sandwich with herbs and cheese.",
    quantity: 5,
  }
];


export const dataSlice = createSlice({
   name: 'productData',
   initialState: data,
   reducers: {

   }
})

export const productData = (state: RootState) => state.data;

export default dataSlice.reducer;