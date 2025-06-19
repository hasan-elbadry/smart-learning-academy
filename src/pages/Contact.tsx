import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Users,
  Heart,
  Globe,
  Headphones,
} from "lucide-react";
import {
  AnimatedSection,
  StaggeredList,
  MagneticButton,
  FloatingElement,
} from "@/components/AnimatedElements";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  nationality: string;
  email: string;
  phoneCode: string;
  phone: string;
  course: string;
  message: string;
}

export default function Contact() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    nationality: "",
    email: "",
    phoneCode: "+20",
    phone: "",
    course: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        nationality: "",
        email: "",
        phoneCode: "+20",
        phone: "",
        course: "",
        message: "",
      });
    }, 2000);
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.nationality
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@smartlearning.academy",
      description: "Send us an email anytime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+966 50 123 4567",
      description: "Mon-Fri from 8am to 5pm",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Riyadh, Saudi Arabia",
      description: "Main campus location",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "Support",
      value: "24/7 Available",
      description: "We're here to help",
      color: "from-orange-500 to-red-500",
    },
  ];

  const courses = [
    "Advanced Web Development",
    "Digital Marketing Mastery",
    "Data Science Fundamentals",
    "UI/UX Design Principles",
    "Business Analytics",
    "Mobile App Development",
    "General Inquiry",
  ];

  const whatsappNumber = "+966547232354";

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
            <Badge className="mb-6 px-6 py-2 text-lg bg-primary/10 text-primary border-primary/20">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              {t("nav.contact")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              If you have any inquiries, please contact us. We're here to help
              you start your learning journey.
            </p>
          </AnimatedSection>

          {/* Contact Info Cards */}
          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            itemClassName="group"
            delay={100}
          >
            {contactInfo.map((info, index) => (
              <MagneticButton key={index} intensity={5}>
                <Card className="card-hover text-center bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <FloatingElement>
                        <info.icon className="h-8 w-8" />
                      </FloatingElement>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="font-medium mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </MagneticButton>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <AnimatedSection
                animation="slide-left"
                delay={200}
                className="lg:col-span-2"
              >
                <Card className="bg-card/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                          >
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            placeholder="Enter your first name"
                            className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                          >
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            placeholder="Enter your last name"
                            className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      {/* Nationality */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="nationality"
                          className="text-sm font-medium"
                        >
                          Nationality *
                        </Label>
                        <Select
                          value={formData.nationality}
                          onValueChange={(value) =>
                            handleInputChange("nationality", value)
                          }
                          required
                        >
                          <SelectTrigger className="h-11 bg-background/50 border-border/50">
                            <Globe className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select your nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="egypt">🇪🇬 Egypt</SelectItem>
                            <SelectItem value="saudi">
                              🇸🇦 Saudi Arabia
                            </SelectItem>
                            <SelectItem value="uae">
                              🇦🇪 United Arab Emirates
                            </SelectItem>
                            <SelectItem value="jordan">🇯🇴 Jordan</SelectItem>
                            <SelectItem value="lebanon">🇱🇧 Lebanon</SelectItem>
                            <SelectItem value="kuwait">🇰🇼 Kuwait</SelectItem>
                            <SelectItem value="other">🌍 Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="Enter your email address"
                          className="h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </Label>
                        <div className="flex gap-2">
                          <Select
                            value={formData.phoneCode}
                            onValueChange={(value) =>
                              handleInputChange("phoneCode", value)
                            }
                          >
                            <SelectTrigger className="w-32 h-11 bg-background/50 border-border/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="+20">🇪🇬 +20</SelectItem>
                              <SelectItem value="+966">🇸🇦 +966</SelectItem>
                              <SelectItem value="+971">🇦🇪 +971</SelectItem>
                              <SelectItem value="+962">🇯�� +962</SelectItem>
                              <SelectItem value="+961">🇱🇧 +961</SelectItem>
                              <SelectItem value="+965">🇰🇼 +965</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="Enter your phone number"
                            className="flex-1 h-11 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      {/* Course Interest */}
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-sm font-medium">
                          Course Interest
                        </Label>
                        <Select
                          value={formData.course}
                          onValueChange={(value) =>
                            handleInputChange("course", value)
                          }
                        >
                          <SelectTrigger className="h-11 bg-background/50 border-border/50">
                            <Users className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select a course (optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem
                                key={course}
                                value={course.toLowerCase()}
                              >
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-24 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                          rows={4}
                        />
                      </div>

                      {/* Submit Button */}
                      <MagneticButton>
                        <Button
                          type="submit"
                          className="w-full h-12 btn-professional text-lg"
                          disabled={!isFormValid() || isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-3 h-5 w-5" />
                              Let's Talk
                              <Heart className="ml-3 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </MagneticButton>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* WhatsApp and Additional Info */}
              <AnimatedSection
                animation="slide-right"
                delay={400}
                className="space-y-6"
              >
                {/* WhatsApp Card */}
                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2 text-green-700 dark:text-green-400">
                      <MessageCircle className="h-6 w-6" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Prefer instant messaging? Connect with us on WhatsApp for
                      quick responses.
                    </p>
                    <MagneticButton>
                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        onClick={() =>
                          window.open(
                            `https://wa.me/${whatsappNumber}`,
                            "_blank",
                          )
                        }
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {whatsappNumber}
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Response Time</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Email: Within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>WhatsApp: Within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Phone: Immediate</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sunday - Thursday</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span className="font-medium">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Support Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <FloatingElement className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full" />
        <FloatingElement className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 text-center relative">
          <AnimatedSection animation="scale-in">
            <h2 className="text-4xl font-bold mb-6">Need Immediate Help?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Check out our FAQ section or reach out to our support team for
              instant assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                >
                  <Headphones className="mr-2 h-5 w-5" />
                  Support Center
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <AlertCircle className="mr-2 h-5 w-5" />
                  FAQ
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
