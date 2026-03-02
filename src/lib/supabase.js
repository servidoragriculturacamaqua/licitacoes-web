import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas credenciais do projeto no Supabase
const supabaseUrl = 'hhttps://grwnmewdoujrnvbsbbej.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdyd25tZXdkb3Vqcm52YnNiYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0Njg4MDYsImV4cCI6MjA4ODA0NDgwNn0.jKR2VQI3T5Omzjev3--koM7Ws4W1f38yqpZxqEkKsu4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Função utilitária para buscar o perfil do usuário logado
 * Útil para diferenciar se é Técnico ou Financeiro
 */
export const getPerfilUsuario = async (userId) => {
  const { data, error } = await supabase
    .from('perfis')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) {
    console.error('Erro ao buscar perfil:', error.message);
    return null;
  }
  return data;
};