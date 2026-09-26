/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key) — unique identifier for each submission
  - `name` (text, not null) — submitter's full name (required form field)
  - `phone` (text, nullable) — submitter's phone number (optional form field)
  - `email` (text, not null) — submitter's email address (required form field)
  - `service` (text, nullable) — selected service of interest from the dropdown
  - `message` (text, not null) — project details / free-text message (required form field)
  - `status` (text, not null, default 'new') — workflow status for managing submissions (new, read, contacted, archived)
  - `created_at` (timestamptz, default now()) — when the submission was received

2. Indexes
- `contact_submissions_created_at_idx` on `created_at` descending — supports chronological listing of submissions

3. Security
- Enable RLS on `contact_submissions`.
- INSERT policy for `anon, authenticated`: any site visitor can submit a new contact request (the form is public, no sign-in).
- No SELECT, UPDATE, or DELETE policies for anon/authenticated: stored submissions are private to the business owner, who views them through the Supabase dashboard (Table Editor) using the service-role key which bypasses RLS.
- This means the public can write submissions but cannot read, modify, or delete them.

4. Notes
- This is a single-tenant, no-auth app. The contact form is public.
- Submissions are managed via the Supabase dashboard, not through the site.
- The `status` column lets the owner triage submissions (new → read → contacted → archived) without losing the original message.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);