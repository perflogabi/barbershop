import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { id } from "date-fns/locale";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {

        return null;
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true
        }
    });

    if (!barbershop) {
        return null
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />

            <div className="flex flex-col gap-4 py-6 px-5">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default BarbershopDetailsPage;