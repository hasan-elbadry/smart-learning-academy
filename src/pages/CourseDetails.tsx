import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Users, Star, Calendar, User, Award } from "lucide-react";

export default function CourseDetails() {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4">Featured Course</Badge>
            <h1 className="text-4xl font-bold mb-4">
              Advanced Web Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Master modern web development with React, Node.js, and industry
              best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>

              <Card>
                <CardHeader>
                  <CardTitle>What You Will Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Modern React development with hooks and context",
                      "Building RESTful APIs with Node.js and Express",
                      "Database design and implementation with MongoDB",
                      "Authentication and authorization best practices",
                      "Deployment strategies and DevOps fundamentals",
                      "Testing strategies for full-stack applications",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        title: "Introduction to Modern Web Development",
                        lessons: 5,
                      },
                      {
                        title: "React Fundamentals and Advanced Patterns",
                        lessons: 8,
                      },
                      { title: "Backend Development with Node.js", lessons: 6 },
                      { title: "Database Design and Integration", lessons: 4 },
                      { title: "Authentication and Security", lessons: 3 },
                      { title: "Deployment and Production", lessons: 2 },
                    ].map((section, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                          <div className="flex items-center justify-between w-full mr-4">
                            <span>{section.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lessons} lessons
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Detailed lessons for this section will be available
                            soon.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">
                        12 weeks
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Students</div>
                      <div className="text-sm text-muted-foreground">
                        2,431 enrolled
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Rating</div>
                      <div className="text-sm text-muted-foreground">
                        4.9/5 (892 reviews)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Start Date</div>
                      <div className="text-sm text-muted-foreground">
                        Next cohort: Jan 15, 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Instructor</div>
                      <div className="text-sm text-muted-foreground">
                        Dr. Sarah Ahmed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div>
                      <div className="text-3xl font-bold">$299</div>
                      <div className="text-sm text-muted-foreground">
                        One-time payment
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      30-day money-back guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
