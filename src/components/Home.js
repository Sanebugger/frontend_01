import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import healt from './img/healt.webp'
export default function Home() {
  return (

    <>
      {/* menu section */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">

            <div className="col-md-3 col-3 mx-auto bg-primary d-flex justify-content-center">
              <div class="btn-group">
                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Snacks
                </button>
                <ul class="dropdown-menu">
                  ...
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-5 mx-auto bg-danger d-flex justify-content-center">
              <div class="btn-group">
                <button class="btn btn-danger btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Main Dishes
                </button>
                <ul class="dropdown-menu">
                  ...
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-3 mx-auto bg-primary d-flex justify-content-center">
              <div class="btn-group">
                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Beverages
                </button>
                <ul class="dropdown-menu">
                  ...
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* homepage starts */}

      <div className="container-fluid ">
        <div className="row mt-4 mb-4">
          <div className="col-10 mx-auto ">

            <div className="row align-items-center">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                <h1>Grow your <strong className='business'>business</strong> with me</h1>
                <h3 className='mt-3'>I can create ,whatever you want :-) </h3>
                <div class="btn-group my-3">
                  <button type="button" class="btn btn-warning"> <Link to="/products">Get Started</Link> </button>
                  <button type="button" class="btn btn-warning mx-2"> <Link to="/contactus">Contact me</Link></button>
                </div>
              </div>

              <div className="col-md-6 pt-5 pt-lg-5 order-1 order-lg-2 ">
                <img src={healt} className='img-fluid animated' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second section of home page */}
      <div className="container-fluid gallery_home">
        <div className="container">

          <div className="container mx-auto d-flex justify-content-center pt-4 mb-2">
            <h2 >Gallery</h2>
          </div>

          <div className="row align-items-center">

            <div className="col-md-3 col-3 mx-auto  d-flex justify-content-center">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
            </div>
            <div className="col-md-5 col-5 mx-auto  d-flex justify-content-center">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                  <img src={healt} class="d-block w-100" alt="..." />
                                </div>
                              </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
            </div>
            <div className="col-md-3 col-3 mx-auto  d-flex justify-content-center">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <img src={healt} class="d-block w-100" alt="..." />
                                  </div>
                                  <div class="carousel-item">
                                    <img src={healt} class="d-block w-100" alt="..." />
                                  </div>
                                  <div class="carousel-item">
                                    <img src={healt} class="d-block w-100" alt="..." />
                                  </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </div>
            </div>
          </div>
        </div>
      </div>

      {/* after scrolling we got this section */}

      <div className="container-fluid sec">
        <div className="row">
          <div className="col-10 mx-auto">

            <div className="row align-items-center">
              <div className="col-md-6  order-2 order-lg-1 ">
                <img src={healt} className='img-fluid animated' alt="" />
              </div>
              <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 ">
                <h1>Grow your <strong className='business'>business</strong> with me</h1>
                <h3 className='mt-3'>I can create ,whatever you want :-)</h3>
                <div class="btn-group my-3">
                  <button type="button" class="btn btn-warning"> <Link to="/products">Get Started</Link> </button>
                  <button type="button" class="btn btn-warning mx-2"> <Link to="/contactus">Contact me</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* one more section i wanna add of 3 cards  i.e REVIEWS*/}
      <div className="container-fluid my-3">
        <div className="col-md-10 col-10 mx-auto d-flex justify-content-center  ">
          <h2>Reviews by our lovely customers</h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4 mb-4">
          <div className="col-md-10 col-11 mx-auto">

            <div className="row align-items-center">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card ">
                  <img src='' class="card-img-top" alt="img" />
                  <div class="card-body">
                    <h5 class="card-title">title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card ">
                  <img src='' class="card-img-top" alt="img" />
                  <div class="card-body">
                    <h5 class="card-title">title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10">
                <div className="card ">
                  <img src='' class="card-img-top" alt="img" />
                  <div class="card-body">
                    <h5 class="card-title">title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* footer */}
       <Footer/>
    </>

  )
}