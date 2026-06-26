
const AppCareer = () => {
    return (
        <>
            <site-header></site-header>
            <main>
                <HeroCareerSection />
            </main>
            <site-footer></site-footer>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppCareer />);