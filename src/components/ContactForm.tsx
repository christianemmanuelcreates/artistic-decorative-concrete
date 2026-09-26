import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

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
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.get("name"),
        phone: formData.get("phone") || null,
        email: formData.get("email"),
        service: formData.get("service") || null,
        message: formData.get("message"),
      });

      if (error) throw error;

      toast("Request received", {
        description:
          "Thanks for reaching out. We will contact you within one business day to schedule your free estimate.",
      });
      form.reset();
    } catch (cause) {
      console.error("Contact form submission failed", cause);
      toast("Something went wrong", {
        description:
          "We could not send your request right now. Please call (406) 598-2444 or try again later.",
      });
    } finally {
      setSubmitting(false);
    }
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
