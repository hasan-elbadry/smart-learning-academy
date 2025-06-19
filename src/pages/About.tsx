import React from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  UserCircle,
  Award,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Heart,
  Target,
  Eye,
  Sparkles,
  GraduationCap,
  Star,
  Globe,
  Briefcase,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
  CountUp,
} from "@/components/AnimatedElements";

export default function About() {
  const { t } = useI18n();

  const leadership = {
    name: "Dr. Sally Abo Elsaad",
    title: "Chief Executive Officer / CEO of Smart Learning Academy",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    qualifications: [
      {
        degree: "Bachelor of Medicine and Surgery (MBBS)",
        year: "2005",
        icon: GraduationCap,
      },
      {
        degree: "Master's in Pediatrics from Tanta University",
        year: "2008",
        icon: Award,
      },
      {
        degree: "MBA in Hospital Management from Switzerland",
        year: "2012",
        icon: Briefcase,
      },
      {
        degree: "DBA in Digital Transformation from Switzerland",
        year: "2018",
        icon: TrendingUp,
      },
      {
        degree: "DBA in International Business from Switzerland",
        year: "2020",
        icon: Globe,
      },
      {
        degree: "Certified Training Of Trainers (TOT) from IBS",
        year: "2015",
        icon: Users,
      },
      {
        degree: "Certified Director from CMI in the UK",
        year: "2019",
        icon: Star,
      },
    ],
    experience:
      "15+ years experience in major hospitals in Egypt and Saudi Arabia",
    previousRole: "Former Medical Director of Tanta El-kher NICU",
    bio: "Dr. Sally is a visionary leader with a passion for transforming healthcare and education. Her unique combination of medical expertise and business acumen has positioned Smart Learning Academy as a leading educational institution in the region.",
    achievements: [
      "Led digital transformation initiatives at 5 major hospitals",
      "Published 25+ research papers in international journals",
      "Trained over 1,000 healthcare professionals",
      "Recipient of Excellence in Leadership Award 2022",
    ],
    contact: {
      email: "sally.ceo@smartlearning.academy",
      phone: "+966 50 123 4567",
      office: "Riyadh, Saudi Arabia",
    },
  };

  const companyValues = [
    {
      icon: Target,
      title: t("about.values.mission.title"),
      description: t("about.values.mission.description"),
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Eye,
      title: t("about.values.vision.title"),
      description: t("about.values.vision.description"),
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: t("about.values.values.title"),
      description: t("about.values.values.description"),
      color: "from-red-500 to-pink-600",
    },
  ];

  const stats = [
    { label: "Years of Experience", value: 15, suffix: "+", icon: Calendar },
    { label: "Students Trained", value: 25000, suffix: "+", icon: Users },
    { label: "Research Papers", value: 25, suffix: "+", icon: Award },
    { label: "Success Rate", value: 98, suffix: "%", icon: TrendingUp },
  ];

  const timeline = [
    { year: "2005", event: "Graduated with MBBS degree", icon: GraduationCap },
    { year: "2008", event: "Completed Master's in Pediatrics", icon: Award },
    {
      year: "2012",
      event: "Earned MBA in Hospital Management",
      icon: Briefcase,
    },
    { year: "2018", event: "Founded Smart Learning Academy", icon: Building2 },
    { year: "2022", event: "Expanded to international markets", icon: Globe },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" />
          <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-up" className="text-center mb-20">
            <Badge className="mb-5 px-4 py-1.5 text-base bg-primary/10 text-primary border-primary/20">
              <Users className="mr-2 h-4 w-4" />
              {t("about.badge")}
            </Badge>
            <h1 className="text-section-title font-bold mb-5 gradient-text">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("about.subtitle")}
            </p>
          </AnimatedSection>

          {/* Stats Section */}
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            itemClassName="text-center group"
            delay={150}
          >
            {[
              {
                icon: Calendar,
                value: 15,
                suffix: "+",
                label: t("about.stats.experience"),
              },
              {
                icon: Users,
                value: 25000,
                suffix: "+",
                label: t("about.stats.trained"),
              },
              {
                icon: Award,
                value: 25,
                suffix: "+",
                label: t("about.stats.papers"),
              },
              {
                icon: TrendingUp,
                value: 98,
                suffix: "%",
                label: t("about.stats.success"),
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card transition-all duration-300"
              >
                <FloatingElement>
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary hover-scale-105 transition-transform duration-300" />
                </FloatingElement>
                <div className="text-2xl font-bold mb-2 text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-section-title font-bold mb-4">
              {t("about.leadership.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.leadership.subtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                <div className="lg:flex">
                  {/* Profile Image and Basic Info */}
                  <div className="lg:w-2/5 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex flex-col items-center justify-center relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <div className="text-center relative z-10">
                      <FloatingElement>
                        <div className="relative mb-8">
                          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full p-1">
                            <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                              <UserCircle className="h-32 w-32 text-primary" />
                            </div>
                          </div>
                          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                            <Award className="h-6 w-6" />
                          </div>
                        </div>
                      </FloatingElement>
                      <h2 className="text-2xl font-bold mb-3 gradient-text">
                        {t("about.leadership.name")}
                      </h2>
                      <p className="text-primary font-medium text-base mb-5">
                        {t("about.leadership.title.position")}
                      </p>

                      {/* Contact Info */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 justify-center">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{t("about.leadership.contact.email")}</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{t("about.leadership.contact.phone")}</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{t("about.leadership.contact.office")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <CardContent className="lg:w-3/5 p-12">
                    <div className="space-y-8">
                      {/* Bio */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          {t("about.leadership.about")}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base mb-4">
                          {t("about.leadership.bio")}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <Building2 className="h-5 w-5 text-primary mb-2" />
                            <p className="font-medium mb-1">
                              {t("about.leadership.experience")}
                            </p>
                            <p className="text-muted-foreground">
                              15+ سنة خبرة في المستشفيات الكبرى في مصر والمملكة
                              العربية السعودية
                            </p>
                          </div>
                          <div className="bg-secondary/5 p-4 rounded-lg">
                            <Award className="h-5 w-5 text-primary mb-2" />
                            <p className="font-medium mb-1">
                              {t("about.leadership.previousRole")}
                            </p>
                            <p className="text-muted-foreground">
                              مديرة طبية سابقة في وحدة العناية المركزة لحديثي
                              الولادة بطنطا الخير
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          {t("about.leadership.qualifications")}
                        </h3>
                        <div className="grid gap-3">
                          {leadership.qualifications.map(
                            (qualification, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-4 bg-background/50 p-4 rounded-lg border border-border/50 hover:bg-accent/20 transition-all duration-300 group"
                              >
                                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                  <qualification.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">
                                    {qualification.degree}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {qualification.year}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          {t("about.leadership.achievements")}
                        </h3>
                        <div className="grid gap-3">
                          {leadership.achievements.map((achievement, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 group"
                            >
                              <div className="bg-green-500/10 p-1 rounded-full mt-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                              </div>
                              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-section-title font-bold mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            itemClassName="group"
            delay={200}
          >
            {companyValues.map((value, index) => (
              <MagneticButton key={index} intensity={5}>
                <Card className="card-hover h-full text-center bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white hover-scale-105 transition-transform duration-300`}
                    >
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-card-title group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-section-title font-bold mb-4">
              {t("about.timeline.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.timeline.subtitle")}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <StaggeredList
              className="space-y-8"
              itemClassName="group"
              delay={150}
            >
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border-4 border-primary/20">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 group-hover:bg-card transition-colors duration-300">
                    <div className="text-lg font-bold text-primary mb-2">
                      {item.year}
                    </div>
                    <p className="text-base font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-section-title font-bold mb-5">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              {t("about.cta.subtitle")}
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover-scale-102 transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {t("about.cta.button")}
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
