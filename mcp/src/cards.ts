/**
 * The card library: a bonus form of the rubric library, not a second
 * library. Every card is one criterion from one rubric, plus a cover
 * card per rubric. The rubric files remain the source of truth; cards
 * are generated from them at build time (see scripts/gen-cards.mjs).
 */

export interface Card {
  deck: string;
  num: number;
  rubric: string;
  cover: boolean;
  title: string;
  rubric_title?: string;
  principle: string;
  url: string;
  what_to_examine?: string;
  good_looks_like?: string;
  bad_looks_like?: string;
  when_to_use?: string;
  level_and_scale?: string | null;
}

export class CardLibrary {
  constructor(private cards: Card[]) {}

  /** All cards, sorted by deck then number, optionally filtered by deck. */
  list(deck?: string): Card[] {
    return this.cards.filter((c) => !deck || c.deck === deck);
  }

  /** One card by deck and number, or undefined. */
  get(deck: string, num: number): Card | undefined {
    return this.cards.find((c) => c.deck === deck && c.num === num);
  }

  decks(): string[] {
    return [...new Set(this.cards.map((c) => c.deck))];
  }

  count(): number {
    return this.cards.length;
  }
}
