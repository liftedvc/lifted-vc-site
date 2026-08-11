# Script: How to Use This Playbook

**Placement:** Chapter 1 (Intro), 1.01 How to Use This Playbook (line ~1751 in fundraising-playbook.html)
**Existing video:** YouTube ID `IomhmMsG10s` is currently live on the page. This script is the rewrite to match new page copy. Re-record and swap when ready.
**Target length:** ~1:45 to 1:55 (~1,700–1,800 chars)
**Status:** Finalized (2026-05-06). Body copied to `scripts/final/02_how-to-use-this-playbook.md`. Aligns to current page principles: Authenticity wins / Process feeds pitch / Quality is the multiplier. Re-record and swap YouTube ID when ready.

---

Two things to ground before you start: the three principles that drive a successful raise, and how to work through this playbook.

First. Authenticity wins. Popular fundraising advice tends to push hacks. Things like: Fake deadlines. Manufactured competitive pressure. Performed founder archetypes. Traction language designed to obscure. Those tactics break down under scrutiny. And simply put, they rarely work. Be genuinely yourself, build to a high bar, and let real momentum and conviction do the work.

Second. A solid process feeds the pitch. Process is the early focus because activities like building your target investor list, finding warm introductions, and creating fundraising materials are all repetitive motions that create natural opportunities for you to develop your narrative and pitch.

Third. Quality is the multiplier. A successful round runs high-throughput. Eighty to one hundred and twenty warm introductions. Thirty to fifty first meetings. Strong targeting increases conversion. It's what makes the effort you put into creating volume pay off.

And here's how to work through the chapters.

First, read through end to end. The mental model needs to click into place before you start running it live.

Then run it live. The moment you start executing, you're officially fundraising. It's hands-on by design.

If you have a co-founder, read it with them. You'll play different roles during the raise, and shared mental models matter.

And anytime you get stuck, use the Ask a question button up top.

Next up, the math behind venture. It shapes every decision investors make, and it's the foundation for everything that follows.

---

## AI Voiceover Notes

- "First. / Second. / Third." pattern is on purpose for the principles so each one gets a hard stop and lands as its own beat. Resist reformatting to colons or commas
- "Things like:" colon (followed by capital F on "Fake deadlines") is the setup-then-list pattern AI voices handle cleanly. The four staccato examples that follow ("Fake deadlines. Manufactured competitive pressure. Performed founder archetypes. Traction language designed to obscure.") mirror the rhythm of hacks piling up. Keep the periods
- "And simply put, they rarely work." has the subject "they" so the parenthetical reads cleanly with the comma giving it a breath
- Principle 2 is one flowing sentence with an Oxford-comma list: "activities like building your target investor list, finding warm introductions, and creating fundraising materials are all repetitive motions..." The internal commas give Golpo natural breath beats while keeping the list connected to the verb phrase. No period breaks in this list
- "Ask a question" referenced verbatim because that's the literal button label on the page (capital A on Ask)
- Numbers spelled out ("Eighty to one hundred and twenty," "Thirty to fifty") because AI voices read written ranges more reliably than dashed ones. If your Golpo voice handles digits well, swap back
- "Co-founder" hyphenated for cleaner compound-word reading
- The closing handoff "Next up, the math behind venture. It shapes every decision investors make, and it's the foundation for everything that follows." should land in two clean breaths with a small beat between sentences
- Contractions kept throughout for conversational cadence

---

## Note on the rewrite

Page copy was restructured. The three principles in the script now match the page verbatim in spirit: Authenticity wins, Process feeds pitch, Quality is the multiplier. The four how-to-work-through items are paraphrased but stay on the page's structure: read end to end first, then run it live, read with co-founder if you have one, ask anytime.

The handoff line points to Chapter 2 (How Venture Capital Works), which is the new chapter that sits between this intro and the Authentic FOMO Framework chapter.

---

## Note on the live video

YouTube ID `IomhmMsG10s` taught the old principles (milestone-based progress, rigor compounds, activation is the hinge). When the rerecord is ready, swap the videoId in two spots in `fundraising-playbook.html`:

```
React.createElement(Video, {
  title: "How to use this playbook",
  videoId: "NEW_YOUTUBE_ID",
  onPlay: () => window.openVideoLightbox?.("NEW_YOUTUBE_ID", "How to use this playbook")
})
```
