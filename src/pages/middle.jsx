import React from 'react';
import singingpic from '../assets/singing-collection.png';
import dietpic from '../assets/diet-collection.png';
import religiouspic from '../assets/religious-book.png';
function Middle() {
  return (
    <div>
      <section className="collection-container">
        <a href="#" className="collection">
          <img src={singingpic} alt="" />
          <p className="collection-title">Singing<br />Books</p>
        </a>
        <a href="#" className="collection">
          <img src={dietpic} alt="" />
          <p className="collection-title">men<br />books</p>
        </a>
        <a href="#" className="collection">
          <img src={religiouspic} alt="" />
          <p className="collection-title">religious books</p>
        </a>
      </section>
    </div>
  );
}

export default Middle;
