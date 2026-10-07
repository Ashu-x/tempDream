import { useState } from "react";
import { fetchRandomDream } from "../api/dream.api";
import { mockDreams } from "../data/mockDreams";
import type { Dream } from "../types/dream.types";

export function useRandomDream() {
  const [dream, setDream] = useState<Dream>(mockDreams[0]);
  const [isLoading, setIsLoading] = useState(false);

  const chooseRandomDream = async () => {
    setIsLoading(true);
    try {
      setDream(await fetchRandomDream(dream.title));
    } finally {
      setIsLoading(false);
    }
  };

  return { dream, isLoading, chooseRandomDream };
}
