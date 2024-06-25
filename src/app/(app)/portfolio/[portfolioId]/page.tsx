import { getProject } from "@/actions/get-projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    portfolioId: string;
  };
};

const Portfolio = async ({ params }: Props) => {
  const project = await getProject(params.portfolioId);

  if (!project) return notFound();

   

  console.log(project)

  return (
    <div>
      {params.portfolioId}
      <div>
        <p>{project.name}</p>
        <p>{project.slug}</p>
        {/* <p>{project.description}</p> */}
        <Image src={project.image} height={300} width={300} alt="image"/>

      </div>
    </div>
  );
};

export default Portfolio;
