/**
 * Stochastic Muse — adapter module
 *
 * This is the website-side interface for the poem generator.
 * For now it contains a simple placeholder that shuffles and
 * recombines the input words into three lines.
 *
 * Future integration:
 *   Replace the body of this function with a call to the
 *   stochastic-muse API/package, e.g.:
 *
 *     const res = await fetch('https://your-muse-api.example.com/generate', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ words }),
 *     });
 *     const data = await res.json();
 *     return data.lines; // string[]
 *
 * The full corpus (poems, commonplace texts, author styles) should
 * NOT be shipped to the frontend. The future muse runs server-side
 * or as a private API. The website receives only the final three lines.
 */
export async function generateMusePoem(words: string[]): Promise<string[]> {
  const pool = words.filter((w) => w.trim().length > 0);

  if (pool.length === 0) {
    return ["give me words", "and I will give you", "something back"];
  }

  // Placeholder: simple shuffle-and-split
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const third = Math.ceil(shuffled.length / 3);

  return [
    shuffled.slice(0, third).join(" "),
    shuffled.slice(third, third * 2).join(" "),
    shuffled.slice(third * 2).join(" ") || shuffled[0],
  ];
}
