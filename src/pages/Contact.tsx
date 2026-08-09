import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

import Layout from "@/components/Layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send, Share2 } from "lucide-react";

const SERVICE_AREAS = ["Billings", "Laurel", "Columbus", "Roundup", "Huntley", "Hardin", "Forsyth", "Red Lodge", "Absarokee", "Miles City", "Big Timber", "Belfry", "Bridger"];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/people/Artistic-Decorative-Concrete/61555235653912/" },
  { label: "Yelp", href: "https://www.yelp.com/biz/artistic-decorative-concrete-laurel" },
  { label: "Google Business", href: "https://share.google/u8u46DlI07uhgJnWy" },
];

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      toast("Request received", {
        description:
          "Thanks for reaching out. We will contact you within one business day to schedule your free estimate.",
      });
      setSubmitting(false);
      form.reset();
    }, 900);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>
          Tell us about your project and we will get back to you within one business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" name="name" placeholder="Your name" autoComplete="name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" name="phone" type="tel" placeholder="(406) 555-0100" autoComplete="tel" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="service">Service of Interest</FieldLabel>
              <NativeSelect id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="decorative-concrete">Decorative Concrete</option>
                <option value="stamped-concrete">Stamped Concrete</option>
                <option value="driveways-patio">Driveways &amp; Patios</option>
                <option value="foundations">Foundations</option>
                <option value="retaining-walls">Retaining Walls</option>
                <option value="excavation">Excavation</option>
                <option value="other">Other</option>
              </NativeSelect>
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Project Details</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your project, property, and timeline"
                required
              />
            </Field>
          </FieldGroup>
          <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
            {submitting && (
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            <Send data-icon="inline-end" />
            {submitting ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Contact() {
  return (
    <Layout
      seo={{
        title: "Contact Artistic Decorative Concrete | Free Estimate",
        description:
          "Contact Artistic Decorative Concrete in Billings, MT for trusted concrete services, patios, and driveways. Call (406) 598-2444 for a free estimate.",
        canonical: "https://artisticdecorativeconcrete.com/contact",
        ogType: "website",
        schemaTypes: ["LocalBusiness", "Organization", "BreadcrumbList"],
      }}
      hasLocalBusiness={true}
      geo={{"region": "US-MT", "placename": "Billings", "latitude": 45.7833, "longitude": -108.5007}}
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"streetAddress": "3100 S Park City Rd", "addressLocality": "Laurel", "addressRegion": "MT", "postalCode": "59044", "addressCountry": "US"}, "sameAs": ["https://www.facebook.com/people/Artistic-Decorative-Concrete/61555235653912/", "https://www.yelp.com/biz/artistic-decorative-concrete-laurel", "https://share.google/u8u46DlI07uhgJnWy"], "openingHours": [{"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}], "areaServed": []}}
    >
      <section className="flex flex-col">
        {/* Compact hero + form above the fold */}
        <section className="bg-[#1A1A1D] px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl tracking-tighter leading-none text-balance text-white">
                Request Your Free Estimate
              </h1>
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-[55ch] mx-auto lg:mx-0">
                Tell us about your project and we will get back to you within one business day. Call{" "}
                <a href="tel:+14065982444" className="underline underline-offset-4 text-white">
                  (406) 598-2444
                </a>{" "}
                or fill out the form.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="tel:+14065982444">
                  <Button size="lg" variant="secondary">
                    <Phone data-icon="inline-start" />
                    Call (406) 598-2444
                  </Button>
                </a>
                <a href="mailto:chuckyoung1970@gmail.com">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                    <Mail data-icon="inline-start" />
                    Email Us
                  </Button>
                </a>
              </div>
              <Alert className="mt-2 bg-white/5 border-white/10">
                <MapPin className="size-4 text-white/70" aria-hidden="true" />
                <AlertTitle className="text-white">Areas We Serve</AlertTitle>
                <AlertDescription className="text-white/70">
                  We serve Billings, Laurel, Columbus, Roundup, Huntley, Hardin, Forsyth, and surrounding Montana communities.
                </AlertDescription>
              </Alert>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Business information */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 max-w-2xl mb-8">
              <h2 className="text-2xl md:text-3xl tracking-tighter leading-none">
                Business Information
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reach us by phone, email, or through any of our service areas across Montana.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+14065982444"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (406) 598-2444
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="size-5 text-primary" aria-hidden="true" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:chuckyoung1970@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    chuckyoung1970@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://maps.google.com/?q=3100+S+Park+City+Rd,+Laurel,+MT+59044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    3100 S Park City Rd, Laurel, MT 59044
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREAS.map((city) => (
                      <Badge key={city} variant="secondary">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="size-5 text-primary" aria-hidden="true" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Open 24 hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="size-5 text-primary" aria-hidden="true" />
                    Find Us Online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}