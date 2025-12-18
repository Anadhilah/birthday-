import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xphphgvyxyvtprfwkimc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwaHBoZ3Z5eHl2dHByZndraW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NjY1MzcsImV4cCI6MjA4MTU0MjUzN30.UuvpWHEZqUv1AiXD1xnL0wKkNzoNxHwa15738rCMgnw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)