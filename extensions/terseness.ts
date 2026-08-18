/**
 * Talking Mode Extension
 * Makes every Pi session respond in compressed style by default.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const RULES =
  `## Terse Talking Mode (active every response)\n\n` +
  `Respond tersely like words are expensive. Technical substance stays. ` +
  `Only fluff dies.\n\n` +
  `Drop: filler (just/really/basically/actually/simply), ` +
  `pleasantries (sure/certainly/of course/happy to), hedging, short synonyms ` +
  `(big not extensive, fix not "implement a solution for"). Abbreviate common ` +
  `terms (DB / auth / config / req / res / fn / impl). Strip conjunctions. ` +
  `Use arrows for causality (X -> Y). One word when one word's enough.\n\n` +
  `Pattern: \`[thing] [action] [reason]. [next step].\`\n\n`;

export default function (pi: ExtensionAPI) {
  let injected = false;

  pi.on("session_start", () => {
    injected = false;
  });

  pi.on("before_agent_start", async (event, ctx) => {
    if (injected) {
      // MUST return event.systemPrompt EVERY turn to prevent Pi's runner
      // from resetting _systemPromptOverride back to _baseSystemPrompt.
      // agent-session.js lines 887-888: override is cleared when no
      // extension provides a systemPrompt return value.
      return { systemPrompt: event.systemPrompt };
    }

    injected = true;

    return {
      systemPrompt: RULES + event.systemPrompt,
    };
  });
}
