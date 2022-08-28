import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser} from "react-icons/fa";
import { AiOutlineMenu} from "react-icons/ai";

export default function Header() {
    return (
        <>
            <div className="header conatainer-fluid sticky-top">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">

                        <nav class="navbar navbar-expand-lg bg-light">
                            <div class="container-fluid d-flex justify-content-between">
                                <Link class="navbar-brand" to="/">Navbar</Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <AiOutlineMenu color={'rgb(248, 214, 214) '}/>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-5 px-5 ">
                                        <li class="nav-item px-1">
                                            <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/products">PRODUCTS</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/contactus">CONTACT US</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/aboutus">ABOUT US</Link>
                                        </li>



                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                MORE
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" to="#">Action</a></li>
                                                <li><a class="dropdown-item" to="#">Another action</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" to="#">Something else here</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                    {/* <form class="d-flex" >

                                    </form> */}

                                    {/* userinfo offcanvas */}
                                    <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <FaUser size={'1em'} color={'rgb(248, 214, 214) '}/></button>

                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div class="offcanvas-header">
                                        
                                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}
