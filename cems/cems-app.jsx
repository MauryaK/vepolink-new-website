const CEMSApp = () => {
  return (
    <>
      <site-header></site-header>
      <main>
        <Hero />
        <ProductListCard />
        <Capabilities />
        <HowItWorks />
        <Compliance />
        <IndustriesWeWork />
        <Partners />
        <CTA />
      </main>
      <site-footer></site-footer>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<CEMSApp />);
