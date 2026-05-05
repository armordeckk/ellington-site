-- Ellington Properties — Supabase schema
-- À exécuter une fois dans Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  property_id text not null,
  created_at timestamptz not null default now(),
  unique (user_id, property_id)
);

create index if not exists favorites_user_id_idx on public.favorites (user_id);

alter table public.favorites enable row level security;

drop policy if exists "users select own favorites" on public.favorites;
create policy "users select own favorites"
  on public.favorites for select
  using (auth.uid() = user_id);

drop policy if exists "users insert own favorites" on public.favorites;
create policy "users insert own favorites"
  on public.favorites for insert
  with check (auth.uid() = user_id);

drop policy if exists "users delete own favorites" on public.favorites;
create policy "users delete own favorites"
  on public.favorites for delete
  using (auth.uid() = user_id);
