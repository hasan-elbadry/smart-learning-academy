import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  BookOpen,
  Award,
  Clock,
  Star,
  CheckCircle,
  CreditCard,
  Smartphone,
  Building2,
  Globe,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AnimatedSection,
  StaggeredList,
  CountUp,
  FloatingElement,
  MagneticButton,
  GlitchText,
} from "@/components/AnimatedElements";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function Home() {
  const { t, direction } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxOffset = useParallax(0.3);

  const heroSlides = [
    {
      title: t("home.hero.slide1.title"),
      subtitle: t("home.hero.slide1.subtitle"),
      description: t("home.hero.slide1.description"),
      image: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800",
    },
    {
      title: t("home.hero.slide2.title"),
      subtitle: t("home.hero.slide2.subtitle"),
      description: t("home.hero.slide2.description"),
      image: "bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800",
    },
    {
      title: t("home.hero.slide3.title"),
      subtitle: t("home.hero.slide3.subtitle"),
      description: t("home.hero.slide3.description"),
      image: "bg-gradient-to-br from-orange-600 via-red-600 to-orange-800",
    },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Advanced Web Development",
      description:
        "Master modern web development with React, Node.js, and cloud deployment.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      price: "$299",
      rating: 4.9,
      students: 2431,
      duration: "12 weeks",
      level: "Advanced",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description:
        "Learn comprehensive digital marketing strategies and analytics.",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      price: "$199",
      rating: 4.8,
      students: 1876,
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      description:
        "Introduction to data analysis, machine learning, and visualization.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      price: "$349",
      rating: 4.9,
      students: 3245,
      duration: "16 weeks",
      level: "Beginner",
    },
  ];

  const stats = [
    { label: t("home.stats.students"), value: "25,000+", icon: Users },
    { label: t("home.stats.courses"), value: "500+", icon: BookOpen },
    { label: t("home.stats.instructors"), value: "150+", icon: Award },
    { label: t("home.stats.completion"), value: "94%", icon: CheckCircle },
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard, color: "text-blue-600" },
    { name: "Mastercard", icon: CreditCard, color: "text-red-600" },
    { name: "Mada", icon: Smartphone, color: "text-green-600" },
    { name: "Apple Pay", icon: Smartphone, color: "text-gray-800" },
    { name: "PayPal", icon: Globe, color: "text-blue-500" },
    { name: "Bank Transfer", icon: Building2, color: "text-purple-600" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] overflow-hidden hero-slider">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement
            className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"
            duration={8000}
          />
          <FloatingElement
            className="absolute bottom-40 left-10 w-24 h-24 bg-primary/10 rounded-full"
            duration={12000}
          />
          <FloatingElement
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary/10 rounded-full"
            duration={10000}
          />
        </div>

        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-1500 ease-out",
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105",
                slide.image,
              )}
              style={{
                transform: `translateY(${parallaxOffset}px) scale(${index === currentSlide ? 1 : 1.05})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />

              {/* Animated overlay patterns */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50" />

              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl text-white">
                    <div className="overflow-hidden">
                      <h1 className="text-hero md:text-hero-lg font-bold mb-5 hero-text tracking-tight">
                        <GlitchText text={slide.title} />
                      </h1>
                    </div>

                    <div className="overflow-hidden">
                      <h2 className="text-2xl md:text-3xl mb-5 opacity-95 hero-text-delay-1 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                        {slide.subtitle}
                      </h2>
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl mb-6 opacity-85 hero-text-delay-2 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="hero-text-delay-3 flex flex-col sm:flex-row gap-6 relative z-30">
                      <Button
                        size="lg"
                        className="btn-professional bg-white text-primary hover:bg-white/90 px-6 py-3 text-base shadow-2xl font-semibold hover-scale-102"
                      >
                        <Play className="mr-3 h-6 w-6" />
                        {t("home.hero.cta")}
                        <Sparkles className="ml-3 h-5 w-5" />
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="btn-professional border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 text-base backdrop-blur-sm font-semibold hover-scale-102"
                      >
                        {t("home.hero.secondary")}
                        <TrendingUp className="ml-3 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 z-40">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "relative overflow-hidden rounded-full transition-all duration-500 cursor-pointer",
                index === currentSlide
                  ? "w-12 h-4 bg-white shadow-lg"
                  : "w-4 h-4 bg-white/40 hover:bg-white/60 hover-scale-105",
              )}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
          <FloatingElement className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full" />
          <FloatingElement
            className="absolute bottom-10 left-20 w-16 h-16 bg-white/5 rounded-full"
            duration={8000}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="mb-12">
            <div className="text-center">
              <h2 className="text-section-title font-bold mb-4 text-white">
                {t("home.stats.title")}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {t("home.stats.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            itemClassName="text-center group"
            delay={150}
          >
            {[
              {
                icon: Users,
                value: 25000,
                suffix: "+",
                label: t("home.stats.students"),
              },
              {
                icon: BookOpen,
                value: 500,
                suffix: "+",
                label: t("home.stats.courses"),
              },
              {
                icon: Award,
                value: 150,
                suffix: "+",
                label: t("home.stats.instructors"),
              },
              {
                icon: CheckCircle,
                value: 94,
                suffix: "%",
                label: t("home.stats.completion"),
              },
            ].map((stat, index) => (
              <div key={index} className="relative">
                <FloatingElement>
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 hover-scale-105 group-hover:text-yellow-300" />
                </FloatingElement>

                <div className="text-3xl md:text-4xl font-bold mb-3 hover-scale-105 transition-transform duration-300">
                  <CountUp
                    end={stat.value}
                    duration={2500}
                    suffix={stat.suffix}
                    className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  />
                </div>

                <div className="text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {stat.label}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Enhanced Featured Courses Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20 animate-pulse-slow">
              <Sparkles className="mr-2 h-4 w-4" />
              {t("home.featured.badge")}
            </Badge>
            <h2 className="text-section-title font-bold mb-5 gradient-text">
              {t("home.featured.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("home.featured.subtitle")}
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            itemClassName="group"
            delay={200}
          >
            {featuredCourses.map((course) => (
              <MagneticButton key={course.id} intensity={10}>
                <Card className="course-card card-hover bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 overflow-hidden h-full group transition-transform duration-300">
                  <div
                    className={cn(
                      "h-56 relative overflow-hidden",
                      course.image,
                    )}
                  >
                    {/* Floating badge */}
                    <FloatingElement className="absolute top-6 left-6 z-10">
                      <Badge className="bg-white/95 text-gray-800 shadow-lg backdrop-blur-sm px-3 py-1">
                        <Zap className="mr-1 h-4 w-4" />
                        {course.level}
                      </Badge>
                    </FloatingElement>

                    {/* Gradient overlay with animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-700" />

                    {/* Animated geometric shapes */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700" />

                    {/* Price with glow effect */}
                    <div className="absolute bottom-6 right-6 z-10">
                      <div className="text-white font-bold text-xl bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 group-hover:bg-primary hover-scale-105 transition-all duration-300">
                        {course.price}
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardHeader className="pb-4 relative">
                    <CardTitle className="text-card-title group-hover:text-primary transition-colors duration-300 text-reveal">
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:animate-pulse" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <Users className="h-4 w-4 group-hover:animate-bounce" />
                        <span className="font-medium">
                          {course.students.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                        <Clock className="h-4 w-4 group-hover:animate-spin" />
                        <span className="font-medium">{course.duration}</span>
                      </div>
                    </div>

                    <Link to="/course-details">
                      <Button className="w-full btn-professional bg-primary hover:bg-primary/90 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span>{t("courses.viewDetails")}</span>
                        <Play className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>

          <AnimatedSection
            animation="scale-in"
            delay={600}
            className="text-center mt-16"
          >
            <MagneticButton>
              <Link to="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-professional px-6 py-3 text-base border-2 hover-scale-102"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  {t("common.viewAll")} {t("nav.courses")}
                  <TrendingUp className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Payment Methods Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-4 py-2 rounded-full mb-4 text-base font-medium">
              <CheckCircle className="h-4 w-4" />
              {t("home.payment.encryption")}
            </div>
            <h2 className="text-section-title font-bold mb-5">
              {t("home.payment.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("home.payment.subtitle")}
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
            itemClassName="group"
            delay={100}
          >
            {paymentMethods.map((method, index) => (
              <MagneticButton key={index} intensity={5}>
                <Card className="card-hover bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 group-hover:bg-white group-hover:shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <FloatingElement duration={4000 + index * 500}>
                      <method.icon
                        className={cn(
                          "h-12 w-12 mx-auto mb-3 transition-all duration-500 hover-scale-105",
                          method.color,
                        )}
                      />
                    </FloatingElement>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      {method.name}
                    </div>

                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  </CardContent>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>

          <AnimatedSection
            animation="scale-in"
            delay={800}
            className="text-center mt-16"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-base font-medium text-green-700 dark:text-green-400">
                  {t("home.payment.encryption")}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("home.payment.security")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary via-blue-600 to-purple-700 text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <FloatingElement
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
            duration={15000}
          />
          <FloatingElement
            className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full"
            duration={12000}
          />
          <FloatingElement
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"
            duration={20000}
          />

          {/* Gradient overlay animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30 animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in" className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8">
              <Sparkles className="h-6 w-6 animate-pulse" />
              <span className="text-base font-medium">
                {t("home.hero.subtitle")}
              </span>
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-section-title font-bold mb-6 leading-tight">
              <GlitchText text={t("home.cta.final.title")} />
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg mb-8 opacity-95 max-w-4xl mx-auto leading-relaxed font-light">
              {t("home.cta.final.subtitle")}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="bounce-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
              <MagneticButton intensity={12}>
                <Link to="/courses">
                  <Button
                    size="lg"
                    className="btn-professional bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold shadow-2xl hover:shadow-white/25 hover-scale-102"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    {t("home.cta.final.button")}
                    <Sparkles className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton intensity={12}>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-professional border-2 border-white/80 text-white hover:bg-white/20 px-6 py-3 text-base backdrop-blur-sm font-semibold hover-scale-102"
                  >
                    <Users className="mr-3 h-6 w-6" />
                    {t("home.cta.contact")}
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={800} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: CheckCircle,
                  text: t("home.cta.final.features.guarantee"),
                },
                {
                  icon: Award,
                  text: t("home.cta.final.features.certificates"),
                },
                { icon: Users, text: t("home.cta.final.features.support") },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 group hover:bg-white/20 transition-all duration-300"
                >
                  <feature.icon className="h-6 w-6 text-yellow-300 group-hover:animate-bounce" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
