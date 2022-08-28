import React from 'react'
import { AiOutlineMenu} from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Header2() {
  return (
    <>
     <nav class=" bg-light">
                <div class="  d-flex justify-content-between">

                    <div className="brand">
                            jkh
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <AiOutlineMenu color={'rgb(248, 214, 214) '}/>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                        <li class="nav-item px-1">
                                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/products">Products</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/contactus">contact Us</Link>
                                        </li>
                                        <li class="nav-item px-1">
                                            <Link class="nav-link" to="/aboutus">About Us</Link>
                                        </li>

                                    </ul>
                                </div>
                    <div className="accicons">
                             dfdsf
                    </div>
                                 </div>

                </div>
     </nav>                   
     <div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">
   
</div>
<div class="d-flex justify-content-between">
<div className="p">nkj</div>
    <div className="p">nkj</div>
    <div className="p">nkj</div>
</div>
<div class="d-flex justify-content-around">...</div>
<div class="d-flex justify-content-evenly">...</div>    
    </>
  )
}
