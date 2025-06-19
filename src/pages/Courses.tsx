import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Search,
  Filter,
  Play,
  Award,
  TrendingUp,
  Sparkles,
  ChevronDown,
  Grid3X3,
  List,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
} from "@/components/AnimatedElements";

export default function Courses() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      description:
        "Master modern web development with React, Node.js, and cloud deployment strategies.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      students: 2431,
      duration: "12 weeks",
      level: "Advanced",
      category: "Development",
      instructor: "Dr. Ahmed Hassan",
      lessons: 48,
      certificate: true,
      featured: true,
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      description:
        "Learn comprehensive digital marketing strategies, SEO, social media, and analytics.",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      price: "$199",
      originalPrice: "$299",
      rating: 4.8,
      students: 1876,
      duration: "8 weeks",
      level: "Intermediate",
      category: "Marketing",
      instructor: "Sarah Johnson",
      lessons: 32,
      certificate: true,
      featured: false,
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      description:
        "Introduction to data analysis, machine learning, and visualization with Python.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      price: "$349",
      originalPrice: "$449",
      rating: 4.9,
      students: 3245,
      duration: "16 weeks",
      level: "Beginner",
      category: "Data Science",
      instructor: "Prof. Maria Garcia",
      lessons: 64,
      certificate: true,
      featured: true,
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      description:
        "Create stunning user interfaces and experiences with modern design principles.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      price: "$249",
      originalPrice: "$349",
      rating: 4.7,
      students: 1654,
      duration: "10 weeks",
      level: "Intermediate",
      category: "Design",
      instructor: "Alex Chen",
      lessons: 40,
      certificate: true,
      featured: false,
    },
    {
      id: 5,
      title: "Business Analytics",
      description:
        "Master business intelligence, data visualization, and strategic decision making.",
      image: "bg-gradient-to-br from-teal-500 to-cyan-600",
      price: "$279",
      originalPrice: "$379",
      rating: 4.6,
      students: 987,
      duration: "12 weeks",
      level: "Advanced",
      category: "Business",
      instructor: "Dr. Lisa Wang",
      lessons: 36,
      certificate: true,
      featured: false,
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Build native mobile apps for iOS and Android using React Native and Flutter.",
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      price: "$329",
      originalPrice: "$429",
      rating: 4.8,
      students: 2156,
      duration: "14 weeks",
      level: "Advanced",
      category: "Development",
      instructor: "John Smith",
      lessons: 52,
      certificate: true,
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Development",
    "Marketing",
    "Data Science",
    "Design",
    "Business",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterBy === "all" ||
      course.category.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          parseInt(a.price.replace("$", "")) -
          parseInt(b.price.replace("$", ""))
        );
      case "price-high":
        return (
          parseInt(b.price.replace("$", "")) -
          parseInt(a.price.replace("$", ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.students - a.students;
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <BookOpen className="mr-2 h-4 w-4" />
              {t("courses.title")}
            </Badge>
            <h1 className="text-section-title font-bold mb-5 gradient-text">
              {t("nav.courses")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("courses.subtitle")}
            </p>
          </AnimatedSection>

          {/* Search and Filter Section */}
          <AnimatedSection
            animation="slide-up"
            delay={200}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={t("courses.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                  />
                </div>

                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="h-12 bg-background/50 border-border/50">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder={t("courses.filter.category")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      {t("courses.category.all")}
                    </SelectItem>
                    <SelectItem value="development">
                      {t("courses.category.development")}
                    </SelectItem>
                    <SelectItem value="marketing">
                      {t("courses.category.marketing")}
                    </SelectItem>
                    <SelectItem value="data science">
                      {t("courses.category.dataScience")}
                    </SelectItem>
                    <SelectItem value="design">
                      {t("courses.category.design")}
                    </SelectItem>
                    <SelectItem value="business">
                      {t("courses.category.business")}
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 bg-background/50 border-border/50">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    <SelectValue placeholder={t("courses.filter.sort")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">
                      {t("courses.sort.popular")}
                    </SelectItem>
                    <SelectItem value="rating">
                      {t("courses.sort.rating")}
                    </SelectItem>
                    <SelectItem value="students">
                      {t("courses.sort.students")}
                    </SelectItem>
                    <SelectItem value="price-low">
                      {t("courses.sort.priceLow")}
                    </SelectItem>
                    <SelectItem value="price-high">
                      {t("courses.sort.priceHigh")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {t("courses.found")}{" "}
                  <span className="font-semibold text-primary">
                    {sortedCourses.length}
                  </span>{" "}
                  {t("courses.results")}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="transition-all duration-300"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="transition-all duration-300"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Grid/List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredList
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
            itemClassName="group"
            delay={100}
          >
            {sortedCourses.map((course) => (
              <MagneticButton key={course.id} intensity={8}>
                <Card
                  className={`course-card card-hover h-full overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-transform duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-80 h-48" : "h-56"
                    }`}
                  >
                    <div className={`h-full ${course.image} relative`}>
                      {course.featured && (
                        <FloatingElement className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                            <Sparkles className="mr-1 h-4 w-4" />
                            Featured
                          </Badge>
                        </FloatingElement>
                      )}

                      <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                        {course.level}
                      </Badge>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-700" />

                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold">
                            {course.price}
                          </span>
                          <span className="text-base line-through opacity-60">
                            {course.originalPrice}
                          </span>
                        </div>
                        <div className="text-sm opacity-80">
                          {course.instructor}
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-card-title group-hover:text-primary transition-colors duration-300">
                        {course.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span className="font-medium">
                            {course.students.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">
                            {course.lessons} lessons
                          </span>
                        </div>
                      </div>

                      {course.certificate && (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <Award className="h-4 w-4" />
                          <span>{t("courses.certificate")}</span>
                        </div>
                      )}

                      <Link to="/course-details">
                        <Button className="w-full btn-professional group-hover:bg-primary/90 transition-all duration-300">
                          <Play className="mr-2 h-4 w-4" />
                          {t("courses.viewDetails")}
                          <TrendingUp className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>

          {sortedCourses.length === 0 && (
            <AnimatedSection animation="fade-up" className="text-center py-20">
              <div className="max-w-md mx-auto">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="text-lg font-semibold mb-3">
                  {t("courses.noResults.title")}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t("courses.noResults.description")}
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setFilterBy("all");
                  }}
                  variant="outline"
                >
                  {t("courses.noResults.clear")}
                </Button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-section-title font-bold mb-5">
              {t("courses.cta.title")}
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              {t("courses.cta.subtitle")}
            </p>
            <MagneticButton>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base hover-scale-102"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t("courses.cta.button")}
                </Button>
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
