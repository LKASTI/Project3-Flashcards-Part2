import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const dictionary = [
    {source: "(Spider-man)", q: "\"With great power comes _____ ________?\"", a : "\"great responsibility\""},
    {source: "(Spider-man 2002 Movie)", q: "Does Spider-man have web-shooters?", a: "No!"},
    {source: "(Spider-man 2002 Movie)", q: "What were Norman's last words to Peter?", a: "\"Don't tell Harry...\""},
    {source: "(Spider-man 2 2004 Movie)", q: "Who says \"Intelligence is not a privilege, it's a gift. And you use it for the good of mankind.\"?", a: "Dr. Otto Octavius"},
    {source: "(Spider-man 2002 Movie)", q: "Who says \"You're pathetically predictable. Like a moth to the flame\"?", a: "The Green Goblin"},
    {source: "(Spider-man 1994 TV series)", q: "What technology cures Spider-man's mutation disease?", a: "The Neogenic Recombinator"},
    {source: "(Spider-man 1994 TV series)", q: "Which student in Peter's class turns into a vampire?", a: "Michael Morbius"},
    {source: "(Spider-man Comics)", q: "What did Spider-man bring back to earth from the first \"Secret Wars\"?", a: "The Black Suit"},
    {source: "(Spider-man Comics)", q: "Who's the name behind the Scarlet Spider?", a: "Kaine Parker"},
    {source: "(Spider-man Far From Home Movie)", q: "What does Aunt May call Peter's spider-sense?", a: "Peter Tingle"},
  ];




  const numCards = dictionary.length;

  return (
    <div className="app">
        <h1>Do You Know Spider-man Trivia?</h1>
        <div className='description'>
          <p>Test your knowledge to find out if you're a real web-head fan!<br/>The title in the {"( )"} indicates the movie/media of the trivia.<br/>Lets get started True Believers!</p>
          <p>Total number of cards: {numCards}</p>
        </div>
        <Flashcard dictionary={dictionary} />
    </div>
  )
}

export default App
