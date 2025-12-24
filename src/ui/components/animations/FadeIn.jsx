import { motion as Motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <Motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      {children}
    </Motion.div>
  );
}
