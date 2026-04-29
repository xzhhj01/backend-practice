import { supabase } from "../utils/supabase";

export const getCurrentSession = async () => {
  return supabase.auto.getSession();
};

export const subscribeAuthState = (callback) => {
  // 실제 인증 상태 변화는 발생하지 않습니다.
  return supabase.auth.onAuthStateChange(callback);
};

export const signUpWithEmail = async ({ email, password, redirectTo }) => {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectTo,
    },
  });
};

export const signInWithEmail = async ({ email, password }) => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  return supabase.auth.signOut();
};

export const signInWithGoogle = async ({ redirectTo }) => {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  });
};

export const signInWithKakao = async ({ redirectTo }) => {
  return supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo,
    },
  });
};
