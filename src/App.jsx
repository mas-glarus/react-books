import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
import "./App.css";

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		const updatedBooks = [
			...books,
			{
				id: Math.floor(Math.random()*999999),
				title: title,
			}
		]
		setBooks(updatedBooks)
	};

	return (
		<div className="app">
			<BookList books={books}/>
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
