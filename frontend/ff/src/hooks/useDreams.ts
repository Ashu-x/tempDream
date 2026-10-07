import { useEffect, useState } from "react";
import type { Dream } from "../types/dream.types";

type DreamLoader = () => Promise<Dream[]>;

type DreamState = {
  dreams: Dream[];
  isLoading: boolean;
  error: string | null;
};

export function useDreams(loadDreams: DreamLoader): DreamState {
  const [state, setState] = useState<DreamState>({
    dreams: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let active = true;

    loadDreams()
      .then((dreams) => {
        if (active) setState({ dreams, isLoading: false, error: null });
      })
      .catch(() => {
        if (active) {
          setState({
            dreams: [],
            isLoading: false,
            error: "We could not load the dream archive.",
          });
        }
      });

    return () => {
      active = false;
    };
  }, [loadDreams]);

  return state;
}
