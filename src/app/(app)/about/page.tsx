import { ContentWrapper } from "@/components/content-wrapper";

const AboutPage = () => {
  return (
    <ContentWrapper className="flex pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-52 bg-green-200">

      <div className="flex flex-col w-full h-full space-y-12 ">
        <h1 className="text-4xl font-normal md:text-5xl lg:leading-normal uppercase">
          About me
        </h1>
        <p className="text-lg">
          Hi! I&apos;m Paulius and I&apos;m a self-taught frontend developer
          from Lithuania.I love creating helpful tools and apps for everyone to
          enjoy.
        </p>
        <span className="italic text-lg text-muted-foreground">
          Creating web applications as my hobby and full time job.I create
          custom websites, complex systems to help businesses do better
          online.Worry not, I will make the process as easy and quick as
          possible. Currently, I&apos;m learning about design principles and
          software architecture.
        </span>
      </div>
      <div className="w-full bg-indigo-200">ANIMATION</div>
    </ContentWrapper>
  );
};

export default AboutPage;
