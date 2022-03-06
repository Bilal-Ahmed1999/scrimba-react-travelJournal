
import Navbar from './components/Navbar';
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map((item) => {
    return (<Card
      key={item.title}
      {...item}

    />)
  })

        return (
          <section>
            <Navbar />
            {cards}

          </section>

        );
      }





export default App;
