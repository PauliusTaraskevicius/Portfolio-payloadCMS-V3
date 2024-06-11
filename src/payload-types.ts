export interface Config {
    collections: {
      users: User;
      projects: Project;
  
      "payload-preferences": PayloadPreference;
      "payload-migrations": PayloadMigration;
    };
    globals: {};
  }
  
  export interface User {
    id: string;
    projects?: (string | Project)[] | null;
    email: string;
    updatedAt: string;
    createdAt: string;
  }
  
  export interface Project {
    id: string;
    user?: string | User;
    name: string;
    slug: string;
    description: string;
    images: string;
    updatedAt: string;
    createdAt: string;
  }
  
  export interface PayloadPreference {
    id: string;
    user: {
      relationTo: "users";
      value: string | User;
    };
    key?: string | null;
    value?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    updatedAt: string;
    createdAt: string;
  }
  /**
   * This interface was referenced by `Config`'s JSON-Schema
   * via the `definition` "payload-migrations".
   */
  export interface PayloadMigration {
    id: string;
    name?: string | null;
    batch?: number | null;
    updatedAt: string;
    createdAt: string;
  }
  
  declare module "payload" {
    export interface GeneratedTypes extends Config {}
  }