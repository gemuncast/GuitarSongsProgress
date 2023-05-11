import "./style.css";

function App() {
  return (
    <>
      <Header />
      <PlayLists />
      <ListDetails />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>TEST!!!</h1>
    </header>
  );
}

function PlayLists() {
  return (
    <aside>
      <p>Play list </p>
      <ul>
        <li>PL1</li>
        <li>PL2</li>
        <li>PL3</li>
        <li>PL4</li>
      </ul>
    </aside>
  );
}

function ListDetails() {
  return (
    <section>
      <p>Play List Name </p>
      <ul>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
      </ul>
    </section>
  );
}

export default App;
