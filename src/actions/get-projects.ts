"use server";

import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export const getProjects = async () => {
  const payload = await getPayloadHMR({ config: configPromise });

  const projects = payload.find({
    collection: "projects",
  });

  return projects;
};
