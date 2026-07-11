export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-grid" aria-hidden="true" />
      <p>SYSTEM PATH / 404</p>
      <h1>Signal lost.<br /><em>This route does not exist.</em></h1>
      <span>The requested coordinate is outside the current architecture.</span>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">Return to the origin <b>↙</b></a>
    </main>
  );
}
