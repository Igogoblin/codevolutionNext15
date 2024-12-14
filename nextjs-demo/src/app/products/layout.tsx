function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div>
        <h2>Feature products section</h2>
      </div>
    </div>
  );
}

export default ProductLayout;
