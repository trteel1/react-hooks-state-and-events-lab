function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false)

  let darkModeToggle = _ => {setDarkMode(!darkMode)}
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);


  return (
    <div className={"App " + (false ? "dark" : "light")}>
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={darkModeToggle}>{darkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}
export default App;