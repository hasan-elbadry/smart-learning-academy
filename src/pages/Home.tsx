import { useState, useEffect } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t, direction } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: t("home.hero.title"),
      subtitle: t("home.hero.subtitle"),
      description: t("home.hero.description"),
      image: "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800",
    },
    {
      title: "Expert-Led Training",
      subtitle: "Learn from Industry Professionals",
      description:
        "Our courses are designed and taught by experts with real-world experience in their fields.",
      image: "bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800",
    },
    {
      title: "Flexible Learning",
      subtitle: "Study at Your Own Pace",
      description:
        "Access courses anytime, anywhere. Our platform adapts to your schedule and learning style.",
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
      <section className="relative h-[80vh] overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0",
                slide.image,
              )}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6 opacity-90 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-80 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        {t("home.hero.cta")}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10"
                      >
                        {t("home.hero.secondary")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white",
            direction === "rtl" ? "right-4" : "left-4",
          )}
        >
          {direction === "rtl" ? (
            <ChevronRight className="h-6 w-6" />
          ) : (
            <ChevronLeft className="h-6 w-6" />
          )}
        </button>
        <button
          onClick={nextSlide}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white",
            direction === "rtl" ? "left-4" : "right-4",
          )}
        >
          {direction === "rtl" ? (
            <ChevronLeft className="h-6 w-6" />
          ) : (
            <ChevronRight className="h-6 w-6" />
          )}
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50",
              )}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.featured.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.featured.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={cn(
                    "h-48 relative",
                    course.image,
                    "group-hover:scale-105 transition-transform duration-500",
                  )}
                >
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4">
                    <div className="text-white font-bold text-xl">
                      {course.price}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <Link to="/course-details">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("home.payment.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.payment.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <method.icon
                    className={cn("h-12 w-12 mx-auto mb-3", method.color)}
                  />
                  <div className="font-medium text-sm">{method.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All transactions are secured with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
