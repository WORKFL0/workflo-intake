import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

async function run() {
    const { data, error } = await supabase
        .from('intakes')
        .insert([{
            client_name: 'Test TestCompany',
            client_address: '123 Test St',
            client_city: 'Testville',
            answers: { 'q1': 'test' }
        }])
        .select() // Ask supabase to return the inserted row

    console.log("INSERT data:", data)
    console.log("INSERT error:", error)
}
run()
