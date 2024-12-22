import { useParams, Link ,useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx';
import { useSelector , useDispatch} from 'react-redux';
import { selectBooks , eraseBook, toggleRead} from '../store/booksSlice.js';
import { eraseBookNote } from '../store/notesSlice.js';
function SingleBookPage() {

  const { id } = useParams();

  const books = useSelector(selectBooks);

  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleEraseBook(id) {
    if(confirm('Do you really want to erase this book and its notes?')){
      dispatch(eraseBook(id));
      dispatch(eraseBookNote(id));
      nav("/");
    }
  }

  let book = books.filter(e => e.id == id)[0];

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">
            ← Back to Books
          </button>
        </Link>
{book ? 
      <div>
        <div className="single-book">
          <div className="book-cover">
            <img src={book.cover} />
          </div>

          <div className="book-details">
            <h3 className="book-title">{book.title}</h3>
            <h4 className="book-author">{book.author}</h4>
            <p>{book.synopsis}</p>
            <div className="read-checkbox">
              <input onClick={() => dispatch(toggleRead(book.id))}type="checkbox" defaultChecked={book.isRead} />
              <label>{book.isRead ? "Already Read It" : "Haven't Read it yet"}</label>
            </div>
            <div onClick = {() => handleEraseBook(book.id)}className="erase-book">
              Erase book
            </div>
          </div>
        </div>

        <Notes bookId={id}/>

      </div>
    :  
      <div>
         <h4 className="book-author">Il libro non esiste!</h4>
      </div>
      }
      </div>
    </>
  )
}

export default SingleBookPage
