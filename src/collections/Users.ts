import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.email === process.env.PAYLOAD_ADMIN_EMAIL) return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
    delete: ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "projects",
      label: "Projects",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
    },
  ],
};

export default Users;
