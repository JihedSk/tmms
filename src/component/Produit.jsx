import React, { useState, useEffect } from "react";

import { base64 } from "../Constant/imageresover";

const Produit = () => {
 // const { id } = useParams();
 const id = 5;
  const [produit, setProduit] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduit = async () => {
      setLoading(true);
      const response = await fetch(`https://localhost:7265/api/images/${id}`);
      const data = await response.json();
      setProduit(data);
      setLoading(false);
    };

    getProduit();
  }, [id]);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduit = () => {
    return (
      <>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={base64 + produit.image}
            alt={produit.title}
            className="img-fluid rounded"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h4 className="text-uppercase text-black-50 mb-3">
              {produit.category}
            </h4>
            <h1 className="display-5 mb-4">{produit.title}</h1>
            <p className="lead">{produit.description}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {loading ? <Loading /> : <ShowProduit />}
        </div>
      </div>
    </div>
  );
};

export default Produit;
