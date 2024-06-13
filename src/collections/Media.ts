import { CollectionConfig, Access } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.email === process.env.PAYLOAD_ADMIN_EMAIL) return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
    update: ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
    delete: ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
  },
  upload: true,
  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
    },
  ],
};
