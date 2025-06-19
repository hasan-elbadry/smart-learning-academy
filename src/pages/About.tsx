import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCircle, Award, Building2 } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  const leadership = {
    name: "Dr. Sally Abo Elsaad",
    title: "Chief Executive Officer / CEO of Smart Learning Academy",
    qualifications: [
      "Bachelor of Medicine and Surgery (MBBS)",
      "Master's in Pediatrics from Tanta University",
      "MBA in Hospital Management from Switzerland",
      "DBA in Digital Transformation from Switzerland",
      "DBA in International Business from Switzerland",
      "Certified Training Of Trainers (TOT) from IBS",
      "Certified Director from CMI in the UK",
    ],
    experience:
      "15+ years experience in major hospitals in Egypt and Saudi Arabia",
    previousRole: "Former Medical Director of Tanta El-kher NICU",
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("nav.about")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our Leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <UserCircle className="h-32 w-32 mx-auto text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{leadership.name}</h2>
                  <p className="text-primary font-medium">{leadership.title}</p>
                </div>
              </div>

              <CardContent className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Qualifications</h3>
                    </div>
                    <div className="grid gap-2">
                      {leadership.qualifications.map((qualification, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="justify-start text-left"
                        >
                          {qualification}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Experience</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {leadership.experience}
                    </p>
                    <p className="text-muted-foreground">
                      {leadership.previousRole}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              {t("common.pageDescription")}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
