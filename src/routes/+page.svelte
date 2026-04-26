<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { createPager } from 'sveltekitbook/gestures';
  import { TITLE, AUTHOR, YEAR } from '$lib/config.js';

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);

  function start() {
    goto(base + '/' + flat[0].num);
  }

  const pager = createPager({
    onNext: start,
    onPrev: () => {},
    setOffset: (v) => {
      dragOffset = Math.min(0, v);
    }
  });

  function key(e) {
    if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') start();
  }
</script>

<svelte:window onkeydown={key} />

<main
  class="cover"
  class:dragging
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <div class="meta top">
    <span>{AUTHOR ? `${AUTHOR} · ` : ''}{YEAR}</span>
    <a class="qr" href="{base}/" aria-label="Scan to share this book">
      <img src="{base}/qr.svg" alt="QR code linking to this book" width="96" height="96" />
      <span class="qr-hint">Scan</span>
    </a>
  </div>

  <div class="title-block">
    <h1 class="vt-title">{TITLE}</h1>
    <p class="sub">A book in {flat.length} sections.</p>

    <div class="tldr">
      <div class="tldr-label">TL;DR — start your own</div>
      <pre class="tldr-cmd"><code>npm create sveltekitbook@latest my-book</code></pre>
    </div>
  </div>

  <div class="meta bottom">
    <button onclick={start}>Begin&nbsp;→</button>
    <nav class="cover-nav">
      <a href="{base}/contents">Contents</a>
    </nav>
    <span class="hint">Enter, arrow, swipe, or scroll</span>
  </div>
</main>

<style>
  .cover {
    position: relative;
    height: 100vh;
    height: 100dvh;
    padding: 5vw 7vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
  }

  .cover.dragging { transition: none; }

  .meta {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .qr {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    border: none;
  }
  .qr img {
    display: block;
    width: 96px;
    height: 96px;
    border: 4px solid var(--bg);
    box-shadow: 0 1px 0 var(--rule);
  }
  .qr-hint {
    font-family: var(--sans);
    font-size: 0.62rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--muted);
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .title-block { align-self: center; max-width: 1100px; }

  h1 {
    font-family: var(--serif);
    font-weight: 300;
    font-style: italic;
    font-size: clamp(3.5rem, 12vw, 12rem);
    line-height: 0.9;
    letter-spacing: -0.035em;
    color: var(--ink);
  }

  .sub {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 1.4vw, 1.3rem);
    color: var(--muted);
    margin-top: 1.6rem;
    max-width: 52ch;
    line-height: 1.4;
  }

  .tldr {
    margin-top: 2.2rem;
    max-width: 56ch;
  }
  .tldr-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.32em;
    color: var(--muted);
    margin-bottom: 0.55rem;
  }
  .tldr-cmd {
    margin: 0;
    padding: 0.85rem 1rem;
    background: #14110d;
    color: #f3eee5;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: clamp(0.82rem, 1.05vw, 0.98rem);
    line-height: 1.4;
    border-radius: 2px;
    overflow-x: auto;
    white-space: pre;
  }
  .tldr-cmd code {
    font-family: inherit;
    color: inherit;
    background: transparent;
  }
  .tldr-cmd::before {
    content: '$ ';
    color: rgba(243, 238, 229, 0.5);
  }

  button {
    font-family: var(--sans);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    padding: 1rem 1.6rem;
    background: var(--ink);
    color: var(--bg);
    transition: background 200ms ease;
  }
  button:hover { background: var(--accent); }

  .hint {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .cover-nav {
    display: flex;
    gap: 0.9rem;
    font-family: var(--sans);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .cover-nav :global(a) {
    border-bottom: 1px solid transparent;
    transition: color 160ms ease, border-color 160ms ease;
  }
  .cover-nav :global(a:hover) {
    color: var(--ink);
    border-bottom-color: var(--ink);
  }
</style>
