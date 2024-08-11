import md5 from "md5";
import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(() => "");
  const [error, setError] = useState<string | null>(null);
  const [ts, setTs] = useState(() => new Date().getTime() + "");

  useEffect(() => {
    try {
      const privateKey = import.meta.env.VITE_PRIVATE_KEY;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      if (!privateKey || !publicKey) {
        throw new Error("Missing environment variables");
      }

      const ts = Math.floor(Math.random() * 10) + "";
      const hash = md5(ts + privateKey + publicKey);
      setHash(hash);
      setTs(ts);
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  return { hash, ts, error };
};
