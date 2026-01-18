"use client";

import { Card, CardBody, Button, Image } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type AITool = {
  title: string;
  description: string;
  button: string;
  link: string;
  image: string;
}

const AITools: AITool[] = [
  {
    title: "Personalize learning",
    description: "Go from idea to instruction faster with Gemini in Classroom, a set of AI tools to help educators get started on common tasks.",
    button: "Try now",
    link: "/",
    image: "https://static.qustodio.com/public-site/uploads/2024/05/29080332/QuickGuide_Google-Classroom.jpg"
  },
  {
    title: "Simplify everyday tasks",
    description: "Enable interactive learning tools using NotebookLM and Gems, grounded on class materials.",
    button: "Learn more",
    link: "/",
    image: "https://lh3.googleusercontent.com/eLsQIgieTE9K3Wxus7tC-41QjH-33XO2hgLlngBdPkye_H329kdt_Pg570GptQZ-sqio3b6dvkIr4d01QIrzsvc271aYrTdJpbBNsNjZqnbC1T04leE=w2592-v0-e30"
  },
  {
    title: "Simplify everyday",
    description: "Enable interactive learning tools using NotebookLM and Gems, grounded on class materials.",
    button: "Learn more",
    link: "/",
    image: "https://lh3.googleusercontent.com/eLsQIgieTE9K3Wxus7tC-41QjH-33XO2hgLlngBdPkye_H329kdt_Pg570GptQZ-sqio3b6dvkIr4d01QIrzsvc271aYrTdJpbBNsNjZqnbC1T04leE=w2592-v0-e30"
  }
]

export default function AIToolsSection() {
  return (
    <section className="mt-30 flex flex-col items-center gap-8 px-6">
      <h2 className="font-bold text-4xl text-center">
        AI tools built for educators
      </h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          // mobile
          0: {
            slidesPerView: 1.1,
          },
          // tablet
          640: {
            slidesPerView: 2,
          },
          // desktop
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full max-w-6xl bg-white p-90"
      >
        {AITools.map((sec) => (
          <SwiperSlide className="bg-white p-4" key={sec.title}>
            <Card className="h-full bg-white">
              <CardBody className="flex flex-col gap-2">
                <Image
                  alt={sec.title}
                  src={sec.image}
                  className="w-full aspect-video object-cover rounded-xl"
                />

                <h3 className="font-bold text-lg">{sec.title}</h3>

                <p className="text-sm text-foreground-500">
                  {sec.description}
                </p>

                <Button
                  variant="solid"
                  color="primary"
                  size="sm"
                  className="mt-auto"
                >
                  {sec.button}
                </Button>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
