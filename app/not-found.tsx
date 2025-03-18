export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
      data-oid="efl2rrm"
    >
      <h1 className="text-4xl font-bold mb-4" data-oid="p-u1ltn">
        404 - Page Not Found
      </h1>
      <p
        className="text-muted-foreground mb-8 max-w-md mx-auto"
        data-oid="5t9e6ra"
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        data-oid="ujwb76t"
      >
        Return Home
      </a>
    </div>
  );
}
