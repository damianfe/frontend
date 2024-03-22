import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion'
import Link from 'next/link'

type IFooterItemProps = {
    name: string;
    sectionId: string;
}

export default function FooterItem({ name, sectionId }: IFooterItemProps) {
    const { activeSection, setActiveSection } = useActiveSectionContext();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <motion.li
            className='h-3/4 flex items-center justify-center relative init'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Link
                className={`
                    ${activeSection === sectionId ? "text-gray-500" : ""} 
                    flex w-full transition-all items-center justify-center px-3 py-3 hover:text-gray-950`}
                href={""}
                onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(sectionId);
                    scrollToSection(sectionId);
                }}
            >
                {name}
                {activeSection === sectionId  && (
                    <motion.span
                        className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-400'
                        layoutId='activeSection'
                    ></motion.span>
                )}
            </Link>
        </motion.li>
    );
}
