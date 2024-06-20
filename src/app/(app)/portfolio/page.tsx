import Image from "next/image";
import { ContentWrapper } from "@/components/content-wrapper";
import { getProjects } from "@/actions/get-projects";
import Link from "next/link";
import { ProjectCard } from "./_components/project-card";

const PortfolioPage = async () => {
  const payload = await getProjects()

  console.log(payload.docs.map((item) => item.image));

  return (
    <ContentWrapper className="flex justify-center items-center pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-52 bg-red-200">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-8xl">My work</h1>
          <Image
            src="/mouse1.png"
            width={150}
            height={150}
            className="object-cover animate-bounce cursor-pointer"
            alt="mouse"
            loading="lazy"
          />
          {payload.docs.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.id}`}>
              <h1>{item.name}</h1>
            </Link>
            // <img
            //   key={item.id}
            //   src={item.images}
            //   alt="IMAGE"
            //   className="w-40 h-40"
            // />
          ))}
          <section className="relative h-[300vh] bg-neutral-300">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
              <div className="flex gap-4">
                {(await payload).docs.map((project) => (
                  <div key={project.id}>
                    <ProjectCard
                      name={project.name}
                      slug={project.slug}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PortfolioPage;
