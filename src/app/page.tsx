"use client"

import AppLogo from "@/components/app.logo";
import AIToolsSection from "@/components/landing.aisection";
import {
  Image,
  Button,
  Tabs,
  Tab,
} from "@heroui/react";
import NextLink from "next/link";

export default function Home() {
  console.log("ENV API BASE:", process.env.NEXT_PUBLIC_API_BASE);

  return (
    <main>
      <section className="flex flex-col items-center text-center mt-16 md:mt-30 gap-6">
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

      <AIToolsSection />

      {/* SPLIT SECTION */}
      <section className="mt-30 px-6 md:px-32 py-20 bg-gray-100 mx-auto grid md:grid-cols-2 gap-12 items-center">
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
          <Tab key="educators" title="Educators">
            <div className="mt-4 text-foreground-500 flex flex-col md:flex-row gap-4">
              <p>Amplify instruction with tools that simplify everyday tasks<br/>Boost instructional time with tools purpose-built for teaching, productivity, and collaboration.</p>
              <Image alt="HeroUI hero Image" src={"https://lh3.googleusercontent.com/BRmiR4Nvv--5Iv8eeYvv9fWKlFryNZDUixSidLsuQsOTg5wZCT3PtysMCI59f95a1VUioSeQm0csTjsO-1WXsWNOlDM3hP1j41YjlGK7kALLuy8FKQ=w2592-v0-e30"} />
            </div>
          </Tab>
          <Tab key="it" title="IT Administrators">
            <div className="mt-4 text-foreground-500 flex flex-col md:flex-row gap-4">
              <p>Operate with solutions designed to gain visibility, insights, and control<br/>Create learning environments that are easier to manage and support educators and students with connected, safer tools.</p>
              <Image alt="HeroUI hero Image" src={"https://lh3.googleusercontent.com/BRmiR4Nvv--5Iv8eeYvv9fWKlFryNZDUixSidLsuQsOTg5wZCT3PtysMCI59f95a1VUioSeQm0csTjsO-1WXsWNOlDM3hP1j41YjlGK7kALLuy8FKQ=w2592-v0-e30"} />
            </div>
          </Tab>
        </Tabs>
      </section>
    </main>
  )
}
