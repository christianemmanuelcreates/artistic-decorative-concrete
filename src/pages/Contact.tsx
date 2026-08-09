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
import { Mail, MapPin, Phone, Send } from "lucide-react";

const SERVICE_AREAS = ["Billings", "Laurel", "Columbus", "Roundup", "Huntley", "Hardin", "Forsyth"];

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
      business={{"name": "Artistic Decorative Concrete", "phone": "+1-406-598-2444", "address": {"addressLocality": "Billings", "addressRegion": "MT", "addressCountry": "US"}, "areaServed": [], "openingHours": []}}
    >
      <section className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl tracking-tighter leading-none text-pretty max-w-[20ch]">
              Contact Artistic Decorative Concrete
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              Get in touch with us for trusted concrete services, patios, and driveways with
              guaranteed quality and honest workmanship. We look forward to helping you with your
              next residential or commercial project.
            </p>
            <a href="tel:+14065982444">
              <Button size="lg">
                <Phone data-icon="inline-start" />
                Call (406) 598-2444
              </Button>
            </a>
          </div>
        </section>

        {/* Contact form - split layout */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl tracking-tighter leading-none text-balance">
                Request Your Free Estimate
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
                Ready to upgrade your home or business with decorative concrete? Call us at (406)
                598-2444 to schedule your free estimate.
              </p>
              <Alert>
                <MapPin className="size-4" aria-hidden="true" />
                <AlertTitle>Areas We Serve</AlertTitle>
                <AlertDescription>
                  We serve Billings, Laurel, Columbus, Roundup, Huntley, Hardin, and Forsyth, MT.
                </AlertDescription>
              </Alert>
              <a href="tel:+14065982444">
                <Button size="lg" variant="secondary">
                  <Phone data-icon="inline-start" />
                  Call (406) 598-2444
                </Button>
              </a>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Business information */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl tracking-tighter leading-none">
                Business Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reach us by phone, email, or through any of our service areas across Montana.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    chuckyoung1970@gmail.com
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
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}