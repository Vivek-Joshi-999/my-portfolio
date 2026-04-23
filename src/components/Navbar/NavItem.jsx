import { motion } from "framer-motion";

const NavItem = ({ label, id }) => {
  return (
    <motion.a
      href={`#${id}`}
      className="relative pb-1 hover:text-indigo-400 inline-block"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {label}

      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-indigo-400 w-full origin-left"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </motion.a>
  );
};

export default NavItem;