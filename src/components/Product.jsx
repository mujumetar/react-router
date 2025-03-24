import React from 'react'

export const Product = ({ data }) => {
  return (
    <div className='container my-5 ms-auto text-dark'>
      <div className="container row g-3 my-5 mx-auto">
        {
          data.map((ele) => (
            <div className="col-3" >
              <div class="card" >
                <img src={ele.picture.large} class="card-img-top" alt={ele.picture.large} />
                <div class="card-body">
                  <h2 class="card-title text-dark"> {ele.name.first}</h2>
                  <h5 className='py-0 my-0'>{ele.location.country}</h5>
                  <p className='py-2 my-0'>{ele.gender}</p>
                  <a class="btn btn-primary text-decoration-none">Follow</a>
                </div>
              </div>
            </div>
          ))
        }

      </div>




    </div>
  )
}
