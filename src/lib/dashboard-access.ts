import { createSupabaseServerClient } from '@/lib/supabase/server';

export type DashboardRole =
  | 'founder'
  | 'director'
  | 'administrative_assistant'
  | 'project_manager'
  | 'department_lead';

export type DashboardAccess = {
  id: string;
  authUserId: string;
  discordUserId: string | null;
  role: DashboardRole;
  enabled: boolean;
};

export async function getDashboardAccess(): Promise<DashboardAccess | null> {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('dashboard_access')
    .select('id, auth_user_id, discord_user_id, role, enabled')
    .eq('auth_user_id', user.id)
    .eq('enabled', true)
    .maybeSingle();

  if (error || !data) return null;

  return {
    id: data.id,
    authUserId: data.auth_user_id,
    discordUserId: data.discord_user_id,
    role: data.role as DashboardRole,
    enabled: data.enabled,
  };
}

export async function getDashboardIdentity() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { user: null, access: null };

  const { data, error } = await supabase
    .from('dashboard_access')
    .select('id, auth_user_id, discord_user_id, role, enabled')
    .eq('auth_user_id', user.id)
    .eq('enabled', true)
    .maybeSingle();

  const access = !error && data
    ? {
        id: data.id,
        authUserId: data.auth_user_id,
        discordUserId: data.discord_user_id,
        role: data.role as DashboardRole,
        enabled: data.enabled,
      }
    : null;

  return { user, access };
}
