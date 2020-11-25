export const initialState = {
  mobiles:[{id:12201,name:"iphone x",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:200000,img:"https://api.time.com/wp-content/uploads/2017/09/iphone-x.jpg"},
  {id:12202,name:"iphone 5",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:250000,img:"https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg"},
  {id:12203,name:"iphone 6",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:600000,img:"https://cdn57.androidauthority.net/wp-content/uploads/2018/10/Palm-Phone-9-of-13-1340x754.jpg"},
  {id:12204,name:"iphone 7",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:100000,img:"https://static.digit.in/default/thumb_173457_default_td_480x480.jpeg"},
  {id:12205,name:"iphone 8",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:200000,img:"https://cdn.mos.cms.futurecdn.net/RjEjW5bUU77eXLJCjn4o7a.jpg"},
  {id:12206,name:"iphone 3",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:5600000,img:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/04/Realme-X50m-5G.jpg"},
  {id:12207,name:"iphone 2",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:280000,img:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/08/realme-V5-5G.jpg"},
  {id:12207,name:"iphone 2",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:280000,img:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/08/realme-V5-5G.jpg"}
 ],
  basket: [],
  user:null
};

export const getBasketTotal = (basket)=> basket?.reduce((amount,item)=>item.price+amount,0)
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ITEMS":
      return{
        ...state,
        mobiles:[...state.mobiles, action.mobiles]
      }
    case "SET_USER":
      return{
        ...state,
        user:action.user,
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_MOBILE":{
      const index2 = state.mobiles.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket2 = [...state.mobiles];

      if (index2 >= 0) {
        newBasket2.splice(index2, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      };
      return {
        ...state,
        mobiles: newBasket2,
      };

    }
      
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      };
      return {
        ...state,
        basket: newBasket,
      };
    }
    default:
      return state;
  }
};

export default reducer;
