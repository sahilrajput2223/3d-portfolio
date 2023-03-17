import React from "react"
import { styles } from "../style";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section>
            <Component />
        </motion.section>
    );
}

export default SectionWrapper