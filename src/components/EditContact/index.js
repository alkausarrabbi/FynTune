import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ Shops, updateShop }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = Shops.find(
    (shop) => shop.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setArea(currentContact.area);
    setCategory(currentContact.category);
    setOpen(currentContact.open);
    setClose(currentContact.close);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

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
    updateShop(data);
    toast.success("Shop updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                placeholder="Opening Date"
                value={open}
                onChange={(e) => setOpen(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                placeholder="Closing Date"
                value={close}
                onChange={(e) => setClose(e.target.value)}
              />
            </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Shop
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Shops: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateShop: (data) => {
    dispatch({ type: "UPDATE_SHOP", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
