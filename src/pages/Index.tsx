import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PinnedStorySection from "@/components/PinnedStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <PinnedStorySection />
    <ServicesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
  </PageTransition>
);

export default Index;
