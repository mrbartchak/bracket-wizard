import { createClient } from '@/lib/supabase/server';

export default async function Teams() {
  const supabase = await createClient();
  const { data: teams } = await supabase.from("Teams").select();

  return <pre>{JSON.stringify(teams, null, 2)}</pre>
}