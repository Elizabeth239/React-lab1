import logo from './logo.svg';
import './App.css';


let bookTitle="The best book";
let FIO ="Ivanov Ivan";
let author="Petrov Petr";
let genre="Humor";
let numberOfPages="123";
let review="It is the best book in your life";


function Comp1(){
  return
  ( <div>
    <p>Book name: {bookTitle}</p>
     <p>FIO: {FIO}</p>
     <p>Book author: {author}</p>
     </div>
     );
};

function Comp2(){
  return
  ( <div>
   <p>Book genre: {genre}</p>
     <p>Book number of pages: {numberOfPages}</p>
     <p>Book review: {review}</p>
     </div>
     );
}

function Quote(props) {
 return (
 <>
 <p>{props.bookTitlep}</p>
 <p>{props.FIOp}</p>
 <p>{props.authorp}</p>
 <p>{props.genrep}</p>
 <p>{props.numberOfPagesp}</p>
 <p>{props.reviewp}</p>
 </>
 );
}

function App() {
  return (
    <div className="App">


    {/* <p>Book name: {bookTitle}</p>
     <p>FIO: {FIO}</p>
     <p>Book author: {author}</p>
     <p>Book genre: {genre}</p>
     <p>Book number of pages: {numberOfPages}</p>
     <p>Book review: {review}</p>*/}


     {/*<Comp1/>
     <Comp2/>*/}

    <Quote bookTitlep={bookTitle}/>
    <Quote FIOp={FIO}/>
    <Quote authorp={author}/>
    <Quote genrep={genre}/>
    <Quote numberOfPagesp={numberOfPages}/>
    <Quote reviewp={review}/>



    </div>
    
  );
}

export default App;
