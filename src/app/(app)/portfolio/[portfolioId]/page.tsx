import { getProject } from "@/actions/get-projects";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Portfolio = async ({ params }: Props) => {
  // const project = await getProject(params.id);

  return <div>SALALA</div>;
};

export default Portfolio;
