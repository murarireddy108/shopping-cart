import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const cardetails = [
    {Title:"Fancy Product",Price:"$40.00-$80.00"},
    {Title:"Special Item",Price:"$18.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Sale Item",Price:"$25.00"},
    {Title:"Popular Item",Price:"$40.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Sale Item",Price:"$25.00"},
    {Title:"Fancy Product",Price:"$120.00-$280.00"},
    {Title:"Special Item",Price:"$18.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Popular Item",Price:"$40.00",stars:"⭐⭐⭐⭐⭐"}]
    const [cartCounter , setCardCounter] = useState(0);
     const addCart = ()=>{
       setCardCounter(cartCounter + 1);
     }

     const removeCart = ()=>{
       setCardCounter(cartCounter -1)
     }


  return (
        <section>
         <ShoppingCart cartCounter = {cartCounter} />
          <div className= "row mt-5 ms-4">
            <section className="Shopping-list">
            {cardetails.map((sc)=>(
          <ShopCard Title = {sc.Title} Price = {sc.Price} stars={sc.stars} addCart={addCart} removeCart = {removeCart}/>
        ))}
            </section>
          
          </div>
        </section>

     
  );
}

 function ShoppingCart({cartCounter}){
   return(
     <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/#">All Products</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/#">Popular Items</a></li>
                        <li><a className="dropdown-item" href="/#">New Arrivals</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                 <i class="fas fa-shopping-cart mx-1"></i>  
                     Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCounter}</span>
                </button>
            </form>
        </div>
    </div>
    </nav>
     <div>
     <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
     </div>
     </div>
   
   )
 }


 function ShopCard({Title, Price ,stars , addCart , removeCart}){
   let [count , setCount] = useState(0);
   let [show , setShow] = useState(false);
   return(
       <div className="ShopCard">
       <div className="card text-center" style= {{width : "15rem"}}>
       <img  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..."/>
       <div  className="card-body">
      <h5 className="card-title text-center">{Title}</h5>
      <p className="card-text text-center stars">{stars}</p>
      <p className="card-text text-center">{Price}</p>
        <button className="btn btn-outline-dark" onClick={()=>{
          addCart();
          setCount(count+1 )
          if(count>=0){
            setShow(true);
          }
        }}> {!show ? "Add To Cart" : "Item Added"}
        </button>
       {show ? <button className="btn btn-outline-dark mt-2" onClick={()=>{
          removeCart();
          setCount(count-1);
          if(count<=1){
            setShow(false);
          }
        }} > {show ? "Remove from Cart" : "Item Removed"}
        </button> : "" }
       
    </div>
  </div>
  </div>
 
   )
 }