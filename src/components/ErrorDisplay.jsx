function ErrorDisplay({ error }) {
  return (
    <div>
      <h3>Something went wrong</h3>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorDisplay;
