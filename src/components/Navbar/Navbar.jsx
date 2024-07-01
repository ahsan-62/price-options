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
            <div onClick={() => setOpen(!open)} className="flex mt-4 text-2xl md:hidden">
            {
                open===false ?<TbMenu2 ></TbMenu2> : <IoClose></IoClose>
            }

            <h1 className="ml-2 ">Menu</h1>
             
            </div>
           
            
        
           <ul className={` duration-1000 md:duration-0 absolute ${open ? 'top-16' : '-top-60'} ml-8 md:ml-0 md:flex md:static  bg-yellow-400 p-6  `}>
            {
                routes.map((route) => <Links key={route.id} route={route} ></Links>)
            }
            </ul>
       
        </nav>
    );
};

export default Navbar;