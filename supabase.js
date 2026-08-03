// Creepypasta Fansss - Supabase Connection

// Put your Supabase Project URL between the quotes
const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";


// Put your Supabase anon public key between the quotes
const SUPABASE_KEY = "PASTE_YOUR_ANON_KEY_HERE";


// Creates the connection to Supabase
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// Test message (you can remove this later)
console.log("Supabase connected!");
