"use client"
import { socialMedia } from "@/lib/data";
import Image from "next/image";
import mapa from "../../public/mapa.jpg";
import FooterItem from "./item-footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="flex flex-col sm:flex-row w-full bg-gray-800 text-white justify-around py-5 mt-[3rem]">
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
                <motion.h2
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-bold text-[1.5rem] mb-2 ">
                    Masa Madre
                </motion.h2>
                <div className="flex flex-row space-x-4">
                    {socialMedia.map((item) =>
                        <div
                            key={item.id}
                            className="hover:opacity-50 flex bg-slate-700 rounded-full p-2">
                            <Link href={item.link}>
                                <Image
                                    className="rounded-full"
                                    width={25}
                                    height={25}
                                    src={item.icon}
                                    alt={item.alt}
                                />
                            </Link>
                        </div>
                    )}
                </div>
                <h5 className="text-[0.7rem] mt-4" >
                    © {currentYear} - All rights reserverd
                </h5>
                <hr className="border-gray-600 w-3/4 mt-2 mb-4" />
                <div className="flex flex-col items-center justify-center">
                    <FooterItem name="Contacto" sectionId="contact" />
                </div>
            </div>

            <div className="flex flex-col space-y-2 items-center justify-center">
                <motion.h3
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >¡Descubre nuestra ubicación!
                </motion.h3>
                <div style={{ width: '200px', height: '200px' }}>
                    <Image
                        className=""
                        width={200}
                        height={200}
                        src={mapa}
                        alt='mapa'
                    />
                </div>
            </div>
        </footer>
    )
}
