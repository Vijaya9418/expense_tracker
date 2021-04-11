import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/About">About Us</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/Contacts">Conatct Us</a>
                        </li>
                       
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
