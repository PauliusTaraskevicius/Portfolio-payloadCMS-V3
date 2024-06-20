import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Media } from "@/payload-types";

import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  slug: string;
  image: string | StaticImageData;
};

export const ProjectCard = ({ name, slug, image }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          width={300}
          height={300}
          alt={slug}
          className="object-cover"
          loading="lazy"
        />
      </CardContent>
      <CardDescription>{slug}</CardDescription>
    </Card>
  );
};
