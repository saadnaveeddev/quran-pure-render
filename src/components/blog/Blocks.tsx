import { DataTable } from "@/components/site/Spec";
import { RosetteList } from "@/components/manuscript/Rosette";
import { Arabic } from "@/components/manuscript/Arabic";
import type { Block } from "@/content/blog/types";

/**
 * Renders the structured blocks of a post.
 *
 * Everything goes through the same components as the rest of the site, so a
 * post cannot introduce its own typography, and nothing is injected as raw
 * HTML.
 */

function ArabicBlock({
  arabic,
  transliteration,
  translation,
  reference,
}: Extract<Block, { type: "arabic" }>) {
  return (
    <figure className="my-8 border-l-2 border-gold bg-paper-warm py-5 pl-6 pr-5">
      <p className="text-right">
        <Arabic className="text-[1.75rem] leading-[2]">{arabic}</Arabic>
      </p>
      {transliteration && (
        <p className="mt-3 text-[0.9375rem] italic text-ink-soft">{transliteration}</p>
      )}
      <figcaption className="mt-3 text-[0.9375rem] text-ink-soft">
        {translation}
        {reference && <cite className="mt-1 block not-italic text-ink-faint">{reference}</cite>}
      </figcaption>
    </figure>
  );
}

export function Blocks({ blocks }: { blocks: ReadonlyArray<Block> }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={block.id}
                id={block.id}
                className="text-h2 mt-14 scroll-mt-28 text-balance text-ink first:mt-0"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={i} className="text-h3 mt-9 text-ink">
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="mt-5 text-pretty text-body-l text-ink-soft">
                {block.text}
              </p>
            );

          case "list":
            return block.ordered ? (
              <ol key={i} className="mt-6 space-y-3">
                {block.items.map((item, n) => (
                  <li key={item.slice(0, 24)} className="flex gap-3 text-ink-soft">
                    <span className="text-data shrink-0 text-gold-ink">{n + 1}.</span>
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <RosetteList key={i} className="mt-6 text-ink-soft" items={block.items} />
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-2 border-gold py-1 pl-6 text-body-l italic text-ink"
              >
                <p className="text-pretty">{block.text}</p>
                {block.cite && (
                  <cite className="mt-2 block text-[0.875rem] not-italic text-ink-faint">
                    {block.cite}
                  </cite>
                )}
              </blockquote>
            );

          case "arabic":
            return <ArabicBlock key={i} {...block} />;

          case "callout":
            return (
              <aside key={i} className="my-8 border border-rule bg-paper-warm p-6">
                <h3 className="text-h3 text-ink">{block.title}</h3>
                <p className="mt-2 text-pretty text-ink-soft">{block.text}</p>
              </aside>
            );

          case "table":
            return (
              <DataTable
                key={i}
                className="my-8"
                caption={block.caption}
                head={block.head}
                rows={block.rows}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
