import React, {useState} from 'react';
import AllProductDetails from './AllProductDetails'; 
import Card from './Card'; 

function AllProducts() {
  const [allMenuOpen, setAllMenuOpen] = useState(false);

  function allmenuclick() {
   setAllMenuOpen(!allMenuOpen); 
  }

  const options = ["All Products", "Sweater", "Hoodie"];

  const [selected, setSelected] = useState(false);
  
  return (
    <div>

      <div className="title" onClick={allmenuclick}>
        <h2>{selected}
          <span><ion-icon name="chevron-down-sharp"></ion-icon></span>
          <span>
            {
              allMenuOpen && 
              <ul>
                {options.map((option) => (<li onClick={(e) => {setSelected(option)}}>{option}</li>))}
              </ul>
            }
          </span>
        </h2>
      </div>
  
      <div className="box-container">
        {AllProductDetails.map(product => (
          <Card key={product.id} {...product} />
        ))}

        </div>
      </div>
  );
}

export default AllProducts;
