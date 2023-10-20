import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({
	path: '.env.local'
})

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || supabaseAnonKey) {
	throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
