/*
  # Create reviews table for Nature-Se website

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Customer name
      - `rating` (integer) - Star rating (1-5)
      - `review_text` (text) - Customer testimonial
      - `created_at` (timestamptz) - Timestamp of review submission
      - `is_approved` (boolean) - Moderation flag for admin approval
  
  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to approved reviews
    - Add policy for public insert of new reviews (pending approval)
  
  3. Important Notes
    - Reviews are public but require approval before display
    - Anonymous users can submit reviews
    - Default reviews will be inserted for initial display
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_approved boolean DEFAULT false
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
  ON reviews FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews FOR INSERT
  WITH CHECK (true);

-- Insert some initial approved reviews
INSERT INTO reviews (name, rating, review_text, is_approved) VALUES
  ('Priya Sharma', 5, 'The most authentic honey I''ve ever tasted! You can truly feel the forest in every spoonful. My family loves it in our morning tea.', true),
  ('Rajesh Kumar', 5, 'Finally, real honey that hasn''t been processed to death. The texture, the taste, everything is perfect. Worth every rupee!', true),
  ('Anita Desai', 4, 'Love the raw, unfiltered quality. It''s thicker and richer than store-bought honey. Plus, knowing it supports women workers makes it even better!', true),
  ('Vikram Singh', 5, 'This honey has become a staple in our home. Great for immunity, tastes incredible, and I appreciate the ethical sourcing.', true),
  ('Meera Patel', 5, 'Nature-Se has restored my faith in pure honey. The flavor is complex and earthy - exactly what wild forest honey should taste like!', true),
  ('Arjun Reddy', 4, 'Excellent quality and the fact that it''s unfiltered means all the good stuff is still in there. Highly recommend for health-conscious folks.', true);