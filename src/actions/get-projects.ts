"use server";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import payload from "payload";

export const getProjects = async () => {
  const db = await getPayloadHMR({ config: configPromise });

  const projects = db.find({
    collection: "projects",
  });

  return projects;
};

export const getProject = async (id: string) => {
  const db = await getPayloadHMR({ config: configPromise });

  const project = db.findByID({
    collection: "projects",
    id: id,
  });

  

  return project;
};
