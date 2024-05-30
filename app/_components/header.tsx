import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/logo.png" alt="Barbershop" height={150} width={100}/>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;