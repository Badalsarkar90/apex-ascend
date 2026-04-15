import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PodcastSection from "@/components/PodcastSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <PodcastSection />
    <TestimonialsSection />
    <CallToAction />
    <ContactSection />
  </PageTransition>
);

export default Index;
