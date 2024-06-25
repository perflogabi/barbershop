import { CopyrightIcon } from "lucide-react";

const Footer = () => {
    return ( 
        <div className="w-full bg-secondary py-6 px-5 flex justify-center">
            <p className=" text-gray-400 flex items-center text-xs font-bold opacity-75"><CopyrightIcon size={14} /> 2024 Copyright Barbershop</p>
        </div>
     );
}
 
export default Footer;