import { createClient } from '@supabase/supabase-js';

// These should be replaced with actual environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://twebyogbyianhleeohvg.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZWJ5b2dieWlhbmhsZWVvaHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMzk1NTgsImV4cCI6MjA3NzkxNTU1OH0.ctJpGsMdt2t5baAW_yZZQQ077oqJ9uXDAAB8UHaWlPc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
