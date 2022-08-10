import React, {useState} from 'react';
import './index.css';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))]
// console.log(allCategories)

function App() {
  const [menu, setMenu] = useState(items);

  const filterItems = (category) => {
    if(category === "all"){
      setMenu(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenu(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems}/>
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
