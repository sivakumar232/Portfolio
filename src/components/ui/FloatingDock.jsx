import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({ items, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a
                                    href={item.href}
                                    key={item.title}
                                    className="h-10 w-10 rounded-full bg-white dark:bg-black border border-black/20 dark:border-white/20 flex items-center justify-center"
                                >
                                    <div className="h-4 w-4 text-black dark:text-white">{item.icon}</div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-white dark:bg-black border border-black/20 dark:border-white/20 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black dark:text-white h-5 w-5"
                >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 pb-3 border border-black/20 dark:border-white/20 shadow-lg",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({ mouseX, title, icon, href }) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div ref={ref} style={{ width }} className="aspect-square rounded-full bg-white dark:bg-black border border-black/20 dark:border-white/20 flex items-center justify-center relative">
            <AnimatePresence>
                {mouseX.get() !== Infinity && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="px-2 py-0.5 whitespace-pre rounded-md bg-white dark:bg-black border border-black/20 dark:border-white/20 text-black dark:text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
            <a href={href} className="text-black dark:text-white h-full w-full flex items-center justify-center">
                {icon}
            </a>
        </motion.div>
    );
}
