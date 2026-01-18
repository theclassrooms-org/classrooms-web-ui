"use client"

import AppLogo from "@/components/app.logo";
import {
  Image,
  Button,
  Card,
  CardBody,
  Tabs,
  Tab,
  Link,
} from "@heroui/react";
import NextLink from "next/link";

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

export default function Home() {
  console.log("API BASE:", process.env.NEXT_PUBLIC_API_BASE);

  return (
    <main>
      <section className="flex flex-col items-center text-center mt-30 gap-6">
        <AppLogo />
        <h1 className="text-4xl md:text-6xl font-bold">Where teaching and learning come together</h1>
        <p className="max-w-2xl text-lg text-foreground-500">
          Google Classroom helps educators create engaging learning experiences
          they can personalize, manage, and measure.
        </p>
        <div className="flex gap-4">
          <Button size="lg" color="primary">Contact sales</Button>
          <Button
            as={NextLink}
            href="/login"
            size="lg"
            variant="bordered"
          >
            Sign in to Classroom
          </Button>
        </div>
      </section>

      <section className="mt-30 flex flex-col items-center gap-8 px-6">
        <h2 className="font-bold text-4xl">AI tools built for educators</h2>
        <div className="flex flex-row gap-4 items-center justify-center">
          {AITools.map(sec => (
            <Card className="max-w-lg" key={sec.title}>
              <CardBody className="flex flex-col gap-2">
                <Image alt="HeroUI hero Image" src={sec.image} />
                <h3 className="font-bold text-lg">{sec.title}</h3>
                <p className="text-sm text-foreground-500">
                  {sec.description}
                </p>
                <Button variant="solid" color="primary" size="sm">{sec.button}</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="mt-30 px-96 py-20 bg-gray-100 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4 max-w-7xl">
          <h2 className="text-3xl font-semibold">
            Enrich and personalize learning
          </h2>
          <p className="text-foreground-500">
            Drive student agency with tools that meet students where they are – and build skills for their future.
          </p>
          <Button color="primary" className="w-fit">
            Explore all features
          </Button>
        </div>

        <Image alt="HeroUI hero Image" src={"https://static.qustodio.com/public-site/uploads/2024/05/29080332/QuickGuide_Google-Classroom.jpg"} />
      </section>

      {/* TABS */}
      <section className="px-6 max-w-7xl mx-auto mt-30">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How Classroom can make a difference
        </h2>

        <Tabs aria-label="Audience">
          <Tab key="leaders" title="Education Leaders">
            <div className="mt-4 text-foreground-500 flex gap-4">Enrich and personalize learning<br/>Drive student agency with tools that meet students where they are – and build skills for their future.
              <Image alt="HeroUI hero Image" src={"https://lh3.googleusercontent.com/BRmiR4Nvv--5Iv8eeYvv9fWKlFryNZDUixSidLsuQsOTg5wZCT3PtysMCI59f95a1VUioSeQm0csTjsO-1WXsWNOlDM3hP1j41YjlGK7kALLuy8FKQ=w2592-v0-e30"} />
            </div>
          </Tab>
          <Tab key="educators" title="Educators">
            <div className="mt-4 text-foreground-500 flex gap-4">
              Amplify instruction with tools that simplify everyday tasks<br/>Boost instructional time with tools purpose-built for teaching, productivity, and collaboration.
              <Image alt="HeroUI hero Image" src={"https://lh3.googleusercontent.com/BRmiR4Nvv--5Iv8eeYvv9fWKlFryNZDUixSidLsuQsOTg5wZCT3PtysMCI59f95a1VUioSeQm0csTjsO-1WXsWNOlDM3hP1j41YjlGK7kALLuy8FKQ=w2592-v0-e30"} />
            </div>
          </Tab>
          <Tab key="it" title="IT Administrators">
            <div className="mt-4 text-foreground-500 flex gap-4">
              Operate with solutions designed to gain visibility, insights, and control<br/>Create learning environments that are easier to manage and support educators and students with connected, safer tools.
              <Image alt="HeroUI hero Image" src={"https://lh3.googleusercontent.com/BRmiR4Nvv--5Iv8eeYvv9fWKlFryNZDUixSidLsuQsOTg5wZCT3PtysMCI59f95a1VUioSeQm0csTjsO-1WXsWNOlDM3hP1j41YjlGK7kALLuy8FKQ=w2592-v0-e30"} />
            </div>
          </Tab>
        </Tabs>
      </section>
    </main>
  )
}
