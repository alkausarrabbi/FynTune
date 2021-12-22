import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ Shops, addShop }) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    

    const data = {
      id: Shops.length > 0 ? Shops[Shops.length - 1].id + 1 : 0,
      area,
      name,
      category,
      open,
      close
    };

    addShop(data);
    toast.success("Shop added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid ">
      <h1 className="text-center text-dark py-3 display-2">Add Shop</h1>
      <div className="row p-5">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
              required
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              required
                className="form-control"
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              required
                className="form-control"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              required
                className="form-control"
                type="date"
                placeholder="Opening Date"
                value={open}
                onChange={(e) => setOpen(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
              required
                className="form-control"
                type="date"
                placeholder="Closing Date"
                value={close}
                onChange={(e) => setClose(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Shop"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Shops: state,
});
const mapDispatchToProps = (dispatch) => ({
  addShop: (data) => {
    dispatch({ type: "ADD_SHOP", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
