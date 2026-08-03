// Creepypasta Fansss - Supabase Connection

// Put your Supabase Project URL between the quotes
const SUPABASE_URL = https://qeehdjfblfemzpeqsxwj.supabase.co/rest/v1/;


// Put your Supabase anon public key between the quotes
const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZWhkamZibGZlbXpwZXFzeHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MDYyODUsImV4cCI6MjEwMTI4MjI4NX0.oENNPZmlQiye3NQx7YuzLc1SGmT_u1vWMovmzQQP9iQ;


// Creates the connection to Supabase
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// Test message (you can remove this later)
console.log("Supabase connected!");
