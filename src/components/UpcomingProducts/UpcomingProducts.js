import React from 'react';
import lava from '../../images/lava2.jpeg'
import lg from '../../images/lg2.jpg'
const UpcomingProducts = () => {
    return (
        <div>
            <div className='text-primary m-5'>
                <h1 className='mx-5 px-5'>Upcoming Products</h1>
                <hr />
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6 g-5'>
                    <div className='w-100'>
                        <img height='300px' src={lava} alt="" />
                    </div>
                    <h3>Lava Helium 12</h3>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 g-5'>
                    <div className='w-100'>
                        <img height='300px' src={lg} alt="" />
                    </div>
                    <h3>LG gram 14Z950</h3>
                </div>
            </div>
        </div>
    );
};
{/* <div className='row'>
    <div className=" col-sm-12 col-md-6 col-lg-4 g-5">
        <div className="card" style={{ width: "18rem" }}>
            <img src={lava} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">Lava Helium 12</h3>
            </div>
        </div>
    </div>
    <div className=" col-sm-12 col-md-6 col-lg-4 g-5">
        <div className="card" style={{ width: "18rem" }}>
            <img src={lg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">LG gram 14Z950</h3>
            </div>
        </div>
    </div>

</div> */}
export default UpcomingProducts;