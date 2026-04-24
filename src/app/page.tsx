"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Vertex Digital"
          navItems={[
            { name: "Projects", id: "work" },
            { name: "Capabilities", id: "services" },
            { name: "Studio", id: "about" },
            { name: "Connect", id: "contact" },
          ]}
          button={{ text: "Request Consultation", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Precision-Engineered Digital Ecosystems"
          description="We don't just build sites; we architect high-performance digital infrastructure for ambitious brands that demand measurable growth and market leadership."
          tag="Industrial-Grade Web Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Deploy Solution", href: "#contact" },
            { text: "View Portfolio", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/multicultural-team-women-leaders-hold-online-conference-call_482257-123708.jpg", imageAlt: "Enterprise SaaS UI" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-trading-setup-with-monitor-running-forex-trends-going-up_482257-126331.jpg", imageAlt: "High-frequency trading dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-photo/3d-render-pos-terminal-paper-check-bill-cards_107791-17432.jpg", imageAlt: "Fintech mobile experience" },
            { imageSrc: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827320.jpg", imageAlt: "Logistics management portal" },
            { imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828186.jpg", imageAlt: "Aerospace maintenance platform" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-vector/template-site-cloud-storage_1441-2274.jpg", imageAlt: "Cloud infrastructure interface" },
            { imageSrc: "http://img.b2bpic.net/free-photo/modern-workspace-with-computer_23-2151966696.jpg", imageAlt: "Data visualization dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-vector/web-3-0-technology-isometric-set-with-mobile-application-templates-isolated-vector-illustration_1284-80053.jpg", imageAlt: "Global payment gateway UI" },
            { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003793.jpg", imageAlt: "AI operational command center" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Core Competencies"
          description="From mission-critical cloud backends to immersive user interfaces, our expertise spans the full spectrum of digital complexity."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Explore Capabilities", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Algorithmic SEO",              description: "Performance-driven search optimization strategies that dominate high-intent keywords.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["SERP Dominance", "Entity SEO", "Technical Audit", "Core Web Vitals", "Scalable Backlinks", "Semantic Search", "Index Velocity"],
            },
            {
              title: "Systems Engineering",              description: "Robust, scalable architecture designed for enterprise-level traffic and data throughput.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-vector/server-racks-database-room-data-center-with-cloud-computer-connections_1441-1649.jpg", imageAlt: "Cloud Infrastructure" },
                { imageSrc: "http://img.b2bpic.net/free-photo/isometric-view-3d-rendering-neon-city_23-2150901067.jpg", imageAlt: "System Architecture" },
                { imageSrc: "http://img.b2bpic.net/free-photo/man-home-doing-muscle-exercises-after-feeling-pain-from-incorrect-posture_482257-113973.jpg", imageAlt: "API Development" },
              ],
            },
            {
              title: "Strategic Design",              description: "High-conversion aesthetic systems built on behavioral economics and data.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-day_52683-160828.jpg", imageAlt: "UX Wireframes" },
                { imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169884.jpg", imageAlt: "Design Systems" },
                { imageSrc: "http://img.b2bpic.net/free-photo/digital-training-innovation-concept-with-futuristic-interface-screens_1134-352.jpg", imageAlt: "Prototyping" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Featured Deployments"
          description="Real-world case studies demonstrating our commitment to performance, reliability, and visual excellence."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Review All Case Studies", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Nexus Logistics",              description: "Global supply chain management dashboard",              imageSrc: "http://img.b2bpic.net/free-photo/two-coworkers-planning-new-strategy-analyzing-online-company-information-startup-office-business-partners-collaborating-analytics-presentation-using-laptop-papers_482257-75252.jpg",              imageAlt: "Nexus Dashboard",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Quantum Finance",              description: "Automated investment portfolio interface",              imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",              imageAlt: "Finance Platform",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Vector Aerospace",              description: "Maintenance record tracking portal",              imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828205.jpg",              imageAlt: "Aerospace Portal",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Cipher Health",              description: "Patient data management system",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-med-school-pupil-studies-pharmacology-notes-library_482257-117779.jpg",              imageAlt: "Medical Portal",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <FeatureBento
          title="The Engineering Standard"
          description="Our operational methodology prioritizes stability, security, and continuous deployment excellence."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Adaptive Interface Scaling",              description: "Dynamic layout systems that guarantee visual integrity across every device form factor.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Compatibility Check",              alertMessage: "All systems functional",              apps: [
                { name: "Node", icon: Phone },
                { name: "Terminal", icon: MessageCircle },
                { name: "DB", icon: BookOpen },
                { name: "DevOps", icon: Tv },
                { name: "Auth", icon: Camera },
                { name: "Security", icon: Music },
                { name: "Config", icon: Settings },
                { name: "Logs", icon: MessageCircle },
              ],
            },
            {
              title: "Hardened Infrastructure",              description: "Enterprise-grade zero-trust security and 99.999% platform availability.",              bentoComponent: "reveal-icon",              icon: Shield,
            },
            {
              title: "Agile Lifecycle",              description: "From sprint zero to continuous production rollout in record speed.",              bentoComponent: "timeline",              heading: "Production Release",              subheading: "Phase 1",              items: [
                { label: "Discovery & Requirements", detail: "Days 1-2" },
                { label: "Architecture & Code", detail: "Days 3-8" },
                { label: "Quality Assurance", detail: "Days 9-10" },
              ],
              completedLabel: "Deployed"},
            {
              title: "Ecosystem Integration",              description: "Seamless orchestration with complex legacy APIs and modern data stacks.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Growth Analytics",              description: "Real-time data telemetry for precise performance monitoring.",              bentoComponent: "line-chart"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="The level of engineering rigor and design polish provided by Vertex has completely redefined our operational efficiency and user retention metrics."
          rating={5}
          author="— Jonathan Vance, CTO at Nexus Logistics"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/attractive-blond-male-dressed-suit-dark-grey-background_613910-14130.jpg", alt: "Client Executive" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Measurable Impact"
          description="Empowering industry-defining brands through technical excellence and strategic implementation."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "perf", value: "400%", title: "Performance", description: "Average speed increase for client platforms", icon: Award },
            { id: "uptime", value: "99.99%", title: "Stability", description: "Proven production uptime record", icon: Users },
            { id: "roi", value: "12x", title: "ROI", description: "Average return on digital infrastructure", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="The Vertex Advantage"
          description="Compare the difference between standard development and architectural engineering."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Non-scalable, rigid templating systems",              "High-latency performance bottlenecks",              "Lack of security-first development",              "Obsolete UI/UX design patterns",              "No post-production technical maintenance"],
          }}
          positiveCard={{
            items: [
              "Custom-engineered, future-proof code",              "Global-scale, edge-optimized performance",              "Built-in enterprise-level security",              "Data-driven, high-conversion interfaces",              "Ongoing mission-critical support"],
          }}
        />
        <TeamCardFive
          title="Engineering Leadership"
          description="Meet the senior architects and designers steering our creative production cycle."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Elena Rossi", role: "Head of Architecture", imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419444.jpg", imageAlt: "Elena Rossi" },
            { id: "2", name: "Marcus Thorne", role: "Principal UI Designer", imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-with-long-hair-dressed-green-jacket_613910-10368.jpg", imageAlt: "Marcus Thorne" },
            { id: "3", name: "Julian Chen", role: "Systems Lead", imageSrc: "http://img.b2bpic.net/free-photo/technician-making-sure-high-tech-facility-data-center-is-appropriately-equipped_482257-94430.jpg", imageAlt: "Julian Chen" },
          ]}
        />
        <FaqBase
          title="Technical Specifications"
          description="Detailed inquiries regarding our development workflows and operational standards."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "2", title: "How is your pricing structured?", content: "We provide value-based pricing models defined by project scope, complexity, and resource requirements rather than generic tiers." },
            { id: "1", title: "What is your delivery methodology?", content: "We utilize an agile development model with bi-weekly sprint reviews, ensuring constant feedback loops and rapid deployment cycles." },
            { id: "3", title: "Do you provide site reliability engineering?", content: "Yes, we offer ongoing 24/7 monitoring, security patching, and proactive maintenance to ensure 99.999% uptime." },
            { id: "4", title: "Can you integrate with enterprise ERPs?", content: "Our team specializes in deep integration with complex legacy systems, CRMs, and custom middleware using highly secure API protocols." },
            { id: "5", title: "What is your primary technology stack?", content: "We operate on a modern, typed ecosystem comprising Next.js, TypeScript, PostgreSQL, and global-edge cloud infrastructure." },
          ]}
        />
        <ContactCTA
          tag="Ready to Build?"
          title="Let's Engineer Your Future Infrastructure"
          description="Engage our architects to discuss your technical requirements and strategic goals. Let's build something enduring."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Schedule Technical Briefing", href: "#contact" },
            { text: "View Case Library", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Vertex"
          copyrightText="© 2026 | Vertex Digital Systems"
          columns={[
            {
              title: "Organization",              items: [
                { label: "Our Studio", href: "#about" },
                { label: "Capabilities", href: "#services" },
                { label: "Projects", href: "#work" },
                { label: "Inquiry", href: "#contact" },
              ],
            },
            {
              title: "Infrastructure",              items: [
                { label: "Cloud Engineering", href: "#" },
                { label: "Performance Optimization", href: "#" },
                { label: "Strategy", href: "#" },
                { label: "Design Systems", href: "#" },
              ],
            },
            {
              title: "Presence",              items: [
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Medium", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}