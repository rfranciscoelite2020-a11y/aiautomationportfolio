import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/footer";
import { ChatWidget } from "@/components/portfolio/chat-widget";
import { Hero, Stats } from "@/components/portfolio/hero";
import { Services, Skills } from "@/components/portfolio/services";
import { Works } from "@/components/portfolio/works";
import { CaseStudy, Process } from "@/components/portfolio/case-study";
import { Testimonials, TrustedBy, Certifications } from "@/components/portfolio/testimonials";
import { About, FAQ, CTA, Contact } from "@/components/portfolio/about";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Randolf Madelo Francisco — GoHighLevel & AI Automation Expert" },
      {
        name: "description",
        content:
          "Certified GoHighLevel expert and AI automation builder. CRM systems, AI agents, automation workflows, and sales funnels shipped for service businesses, agencies, and coaches.",
      },
      {
        property: "og:title",
        content: "Randolf Madelo Francisco — GoHighLevel & AI Automation Expert",
      },
      {
        property: "og:description",
        content:
          "Certified GoHighLevel expert and AI automation builder. CRM systems, AI agents, automation workflows, and sales funnels shipped for service businesses, agencies, and coaches.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1792556145788331050/attachments/7f3c8349-d939-4aaa-ab8d-9578a62c5641.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1792556145788331050/attachments/7f3c8349-d939-4aaa-ab8d-9578a62c5641.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Skills />
        <Works />
        <CaseStudy />
        <Process />
        <Testimonials />
        <TrustedBy />
        <Certifications />
        <About />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
