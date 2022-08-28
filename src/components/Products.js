import React from 'react'
import pro from './Pdata'
export default function Products() {
  return (
    <>
    <div className="produc">
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <h2>Our Products</h2>
      </div>
    </div>
    <div class=" col-md-10  mx-auto" >
            <div className="row ">
                      {
                          pro.map((c)=>{
                              return (
                                <div class=" col-md-4 col-10 mx-auto pt-4 " >
                                <div className="card ">

                                <img src={c.image}class="card-img-top" alt="img"/>
                                <div class="card-body">
                                  <h5 class="card-title">{c.title}</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                              </div>
                              )
                          })
                      }
               
                
            </div>
    </div>
    
    </div>
    </>
  )
}
