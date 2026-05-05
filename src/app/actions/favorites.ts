"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function toggleFavorite(propertyId: string): Promise<{
  ok: boolean;
  favored?: boolean;
  needsAuth?: boolean;
  error?: string;
}> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { ok: false, needsAuth: true };

  const { data: existing } = await supabase
    .from("favorites")
    .select("id")
    .eq("user_id", user.id)
    .eq("property_id", propertyId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase.from("favorites").delete().eq("id", existing.id);
    if (error) return { ok: false, error: error.message };
    revalidatePath("/mes-favoris");
    return { ok: true, favored: false };
  }

  const { error } = await supabase
    .from("favorites")
    .insert({ user_id: user.id, property_id: propertyId });
  if (error) return { ok: false, error: error.message };

  revalidatePath("/mes-favoris");
  return { ok: true, favored: true };
}

export async function getUserFavoriteIds(): Promise<string[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from("favorites")
    .select("property_id")
    .eq("user_id", user.id);

  return data?.map((row) => row.property_id) ?? [];
}
