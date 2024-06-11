import { CollectionConfig, Access } from "payload/types";
import { User } from "@/payload-types";

const isAdminOrHasAccess =
  (): Access =>
  ({ req: { user: _user } }) => {
    const user = _user as User | undefined;

    if (!user) return false;
    if (user.email === process.env.PAYLOAD_ADMIN_EMAIL) return true;

    const userProjectIDs = (user.projects || []).reduce<Array<string>>(
      (acc, project) => {
        if (!project) return acc;
        if (typeof project === "string") {
          acc.push(project);
        } else {
          acc.push(project.id);
        }

        return acc;
      },
      []
    );

    return {
      id: {
        in: userProjectIDs,
      },
    };
  };

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  access: {
    read: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Project description",
    },
    {
      name: "images",
      type: "array",
      label: "Project images",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: "Image",
        plural: "images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
