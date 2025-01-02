import { getRandomQuote } from "./quotes";
export * from "./classify_bookmarks";
export * from "./quotes";


export function sayHello(name: string | null = null): string {
  var quote = getRandomQuote();
  return `Hello, ${name || "World"}!\nHere's a quote for you:\n"${quote.quote}" - ${quote.author}`;
}
