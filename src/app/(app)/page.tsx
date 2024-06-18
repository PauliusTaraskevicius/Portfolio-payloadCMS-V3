import Link from "next/link";
import { motion } from "framer-motion";
import { ContentWrapper } from "@/components/content-wrapper";
import { getProjects } from "@/actions/get-projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Homepage = async () => {
  const payload = await getProjects();

  return (
    <div>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  );
};

export default Homepage;
