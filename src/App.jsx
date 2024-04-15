import { Nav } from "./components/Nav.jsx";
import { ShoeDetails } from "./components/ShoeDetails.jsx";
import { SHOES } from "./constant.js";
import { NewArrivalSection } from "./components/NewArrivalSection.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { useState } from "react";
// import { Cartitem } from "./components/Cartitem.jsx";
import { Cart } from "./components/Cart.jsx";

const fake = SHOES.map(shoe => {
  return {
    product: shoe,
    qty:1,
    size:44,
  }
})

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe ] = useState(SHOES[0]);

  return (
  <div className="p-10 xl:px-24 animate-FadeIn">
   <Nav onClickShoppingBtn = {() => setIsSidebarOpen(true)} />

   <ShoeDetails shoe={currentShoe} />

   <NewArrivalSection items={ SHOES } onClickCard={setCurrentShoe}/>
   
   <Sidebar 
   isOPen={isSidebarOpen} 
   onClickClose={()=>setIsSidebarOpen(false)}
   >
    <Cart cartitems={fake}/>
    </Sidebar>
  </div>
  );
}


