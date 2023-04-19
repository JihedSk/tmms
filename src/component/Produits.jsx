import React, { useEffect, useState } from "react";
import { base64 } from "../Constant/imageresover";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Produits = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProduits = async () => {
      setLoading(true);
      const response = await fetch("https://localhost:7265/api/images");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
    };

    getProduits();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProduits = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            Tout
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("GIF")}
          >
            GIF
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("CF")}
          >
            CF
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("TJF")}
          >
            TJF
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("BF")}
          >
            BF
          </button>
        </div>

        {filter.map((produit) => {
          return (
            <div className="col-md-3 mb-4" key={produit.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={base64 + produit.image}
                  className="card-img-top"
                  alt={produit.title}
                  height="200"
                  width="100"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {produit.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold"></p>
                  <NavLink to={`/Produits/${produit.id}`} className="btn btn-outline-dark">
                    Découvrir
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>

    );
  };


  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center"> Les produits</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduits />}
        </div>
      </div>
    </div>
  );
};


export default Produits;
