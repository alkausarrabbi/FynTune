import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ Shops,deleteShop}) => {
  const [shops,setShops]=useState(Shops);
  const [selectArea,setSelectArea]=useState('');
  const [selectCategory,setSelectCategory]=useState('');

  const filterArea=Shops.filter(shop=>shop.area.toUpperCase()===String(selectArea).toUpperCase());
  const filterCategory=Shops.filter(shop=>shop.category.toUpperCase()===String(selectCategory).toUpperCase());

  const handlefilter=()=>{
   if(filterArea?.length>0){
     setShops(filterArea);
     
   }
   if(filterCategory?.length>0){
     setShops(filterCategory);
     
   }
  

   
  }


  return (
    <div className="container-fluid p-5">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Shop
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">
                  <form onChange={handlefilter}>
                  <select value={selectArea} onChange={(e)=>setSelectArea(e.target.value)} >
                    <option >Thane</option>
                    <option >Pune</option>
                    <option >Mumbai Suburban</option>
                    <option>Nashik</option>
                    <option >Nagpur</option>
                    <option >Ahmednagar</option>
                    <option >Solapur</option>
                  </select>
                  </form>
                </th>
                <th scope="col"> 
                <form onChange={handlefilter}>
                  <select value={selectCategory} onChange={(e)=>setSelectCategory(e.target.value)} >
                    <option >Grocery</option>
                    <option >Butcher</option>
                    <option >Baker</option>
                    <option>Chemist</option>
                    <option >Stationery shop</option>
                    
                  </select>
                  </form></th>
                <th scope="col">Opening Date</th>
                <th scope="col">Closing Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {shops.length > 0 ? (
                shops.map((shop, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{shop.name}</td>
                    <td>{shop.area}</td>
                    <td>{shop.category}</td>
                    <td>{shop.open}</td>
                    <td>{shop.close}</td>
                    <td>
                      <Link
                        to={`/edit/${shop.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteShop(shop.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No shop found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Shops: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteShop: (id) => {
    dispatch({ type: "DELETE_SHOP", payload: id });
  },
  updateShop: (data) => {
    dispatch({ type: "UPDATE_SHOP", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
