// src/hooks/useRandomAvatar.ts
import { useEffect, useState, useCallback } from "react";

/**
 * 🧠 DEVELOPER NOTE:
 * - Hook ini bertanggung jawab untuk mengambil URL avatar acak dari API publik.
 * - Kita menggunakan endpoint https://randomuser.me/api/ untuk mendapatkan gambar profile.
 * - Hook hanya mengembalikan string URL atau null + state loading & error.
 * - Dipisah ke hook agar mudah diuji dan bisa dipakai ulang di komponen lain.
 */

export function useRandomAvatar() {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAvatar = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // randomuser.me mengembalikan object user dengan property picture
      const res = await fetch("https://randomuser.me/api/?inc=picture&noinfo");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const avatarUrl: string | undefined = data?.results?.[0]?.picture?.large;
      if (!avatarUrl) throw new Error("No avatar in response");
      setUrl(avatarUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setUrl(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch on mount
  useEffect(() => {
    fetchAvatar();
  }, [fetchAvatar]);

  return { url, loading, error, refresh: fetchAvatar };
}
