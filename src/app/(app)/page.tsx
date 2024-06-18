import Link from "next/link";

import { ContentWrapper } from "@/components/content-wrapper";
import { getProjects } from "@/actions/get-projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Homepage = async () => {
  const payload = await getProjects();

  return (
    <div>
      <section>
        <ContentWrapper className="flex justify-center items-center pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-52">
          {" "}
          {/* {(await payload).docs.map((project) => (
        <div key={project.id}>
          <Link href={`/projects/${project.slug}`}>
            <h1>{project.name}</h1>
          </Link>
        </div>
      ))} */}
          <div className="w-full flex flex-col lg:flex-row justify-center gap-x-4">
            <div className="flex justify-center w-full h-1/2 lg:w-1/2">
              <Image
                src="/website.svg"
                width={600}
                height={600}
                alt="website"
                className="object-cover p-4 lg:p-0"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col w-full gap-12 lg:gap-8  lg:w-1/2 lg:justify-between px-8 py-6 lg:py-0 lg:px-4">
              <h1 className="text-4xl font-extrabold md:text-5xl lg:leading-normal uppercase text-center lg:text-start">
                <span className="text-indigo-600">Frontend</span> developer
                based in Lithuania
              </h1>
              <p className="whitespace-pre-wrap text-lg lg:leading-relaxed">
                Creating web applications as my hobby and full time job.I create
                custom websites, complex systems to help businesses do better
                online.Self-taught frontend developer, I specialize in creating
                dynamic, responsive solutions that empower businesses to thrive
                in today&apos;s digital landscape. With technologies such as
                Javascript, HTML and CSS, React, Python.Let&apos;s unlock your
                business potential together for unparalleled success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center lg:justify-start lg:items-start  gap-x-4 gap-y-4">
                {" "}
                <Link href="/portfolio">
                  <Button
                    variant="default"
                    className="text-lg font-semibold"
                    size="lg"
                  >
                    View my work
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    className="bg-transparent border-none text-primary hover:bg-transparent text-lg font-semibold "
                    size="lg"
                  >
                    About me
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    className="bg-transparent border-none text-primary hover:bg-transparent text-lg font-semibold"
                    size="lg"
                  >
                    Contact me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </div>
  );
};

export default Homepage;
