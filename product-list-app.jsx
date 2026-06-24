const ProductListApp = () => (
  <>
    <site-header></site-header>
    <main id="product-list-main">
      <ProductStrip />
      <div className="flex flex-row">
        <div className="max-w-[360px] w-full">
          <ProductListFilter />
        </div>
        <div className="flex-1 p-5">
          <ProductListing />
        </div>
      </div>
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<ProductListApp />);
