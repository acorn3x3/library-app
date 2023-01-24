import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>
        Welcome to my library App <Link to={`/books`}>books</Link>
      </h2>
    </div>
  );
}
