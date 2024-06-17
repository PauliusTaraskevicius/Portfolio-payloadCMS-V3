
import Link from "next/link";
import { getProjects } from "@/actions/get-projects";

const Homepage = async () => {
  const payload = await getProjects()


  return (
    <div>
      {/* {(await payload).docs.map((project) => (
        <div key={project.id}>
          <Link href={`/projects/${project.slug}`}>
            <h1>{project.name}</h1>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Homepage;
