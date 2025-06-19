import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("nav.contact")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you have any inquiries, please contact us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="nationality">Nationality</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="egypt">Egypt</SelectItem>
                    <SelectItem value="saudi">Saudi Arabia</SelectItem>
                    <SelectItem value="uae">United Arab Emirates</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex">
                  <Select defaultValue="+20">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+20">🇪🇬 +20</SelectItem>
                      <SelectItem value="+966">🇸🇦 +966</SelectItem>
                      <SelectItem value="+971">🇦🇪 +971</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    className="flex-1 ml-2"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="course">Course Name</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="course1">Course 1</SelectItem>
                    <SelectItem value="course2">Course 2</SelectItem>
                    <SelectItem value="course3">Course 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>WhatsApp Number</Label>
                <div className="flex items-center gap-2 p-3 border rounded-md bg-muted">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span>🇸🇦 +966547232354</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Let's talk
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
