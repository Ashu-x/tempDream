import { mockDreams } from "../data/mockDreams";
import type { Dream } from "../types/dream.types";

const wait = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export async function fetchRecentDreams(): Promise<Dream[]> {
  await wait(400);
  return mockDreams;
}

export async function fetchAnonymousDreams(): Promise<Dream[]> {
  await wait(400);
  return mockDreams.filter((dream) => dream.anonymous);
}

export async function fetchRandomDream(currentTitle?: string): Promise<Dream> {
  await wait(300);
  const choices = mockDreams.filter((dream) => dream.title !== currentTitle);
  return choices[Math.floor(Math.random() * choices.length)] ?? mockDreams[0];
}
