// import React, { useState } from "react";
// import "./Header.css";
// import { BiMenuAltRight } from "react-icons/bi";
// const Header = () => {
//     const [menuOpened,setMenuOpened]= useState(false)

//     const getMenuStyles = (menuOpened)=>{
//         if (document.documentElement.clientWidth<=800)
//         {
//             return {right: !menuOpened && "-100"}
//         }
//     }
//   return (
//     <section className="h-wrapper">
//       <div className="flexCenter paddings innerWidth  h-container">
//         <img src="./logo.png" alt="logo" width={100} />
//         <div className="flexCenter h-menu">
//             style={getMenuStyles(menuOpened)}
//         </div>

//           <a href="">Residencies</a>
//           <a href="">Our Values</a>
//           <a href="">Contact Us</a>
//           <a href="">Get Started</a>
//           <button className="button">
//             <a href="">Contact</a>
//           </button>
//           <div className="cmenu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
//             <BiMenuAltRight size={30} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Header;

import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Function to calculate dynamic styles for the menu based on viewport width
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100px" }; // Adjusted for correct CSS syntax
    }
    return {}; // Return empty object if condition is not met
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={() => setMenuOpened(false)}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
