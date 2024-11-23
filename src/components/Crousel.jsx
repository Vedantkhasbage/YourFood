import React from "react";

export function Crousel() {
    return <div>
        <div style={{
            height:"25vw",
            width:"100vw"
        }}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner">
                      {/* search bar */}
                {/* <div className="carousel-caption" style={{position: 'relative',zIndex:10,width:"60vw",textAlign:"center",marginLeft:"7vw"}}>
                    <form class="d-flex" >
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
                    </div> */}
                    <div className="carousel-item active">
                    <img style={{width:"100vw",height:"20vw"}} src="https://thumbs.dreamstime.com/b/pieces-pizza-different-various-types-banner-old-retro-boards-still-life-concept-closeup-129819511.jpg" alt="crypto"  className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Congealed_salad_cranberry.jpg/640px-Congealed_salad_cranberry.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?icecream" className="d-block w-100" alt="..." />
                    </div>
                </div>

             
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
}