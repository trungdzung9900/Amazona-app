import './index.css';
import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.product.map((product =>
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img className="medium-image" src={product.image} alt="product" />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>
                      {product.name}
                    </h2>
                  </a>
                  <div className="raiting">
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                    <span>
                      <i className="fas fa-star-half"></i>
                    </span>
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))
          }

        </div>
      </main>
      <footer className="row center">
        All right reserved
        </footer>
    </div>
  );
}

export default App;
