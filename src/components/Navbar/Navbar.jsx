import { TbMenu2 } from "react-icons/tb";
import Links from "../Links/Links";
import { useState } from "react";
import { IoClose } from "react-icons/io5";




const Navbar = () => {

    const[open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
      ];

     
      
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
            {
                open===false ?<TbMenu2 ></TbMenu2> : <IoClose></IoClose>
                

            }
             
             
            </div>
           
            
           <div className="hidden md:flex">
           <ul className="md:flex">
            {
                routes.map((route) => <Links key={route.id} route={route} ></Links>)
            }
            </ul>
           </div>
            
        </nav>
    );
};

export default Navbar;