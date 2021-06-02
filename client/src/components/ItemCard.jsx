import React from "react";
import "./itemCard.css";
import Detail from "../views/Detail";

const ItemCard = ({ discovery, data, wish }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="col-md-4 align-items-stretch">
      <Detail discovery={discovery} show={modalShow} onHide={() => setModalShow(false)} />
      <div className="card__item">
        <div onClick={() => setModalShow(true)} className="card text-white bg-dark p-2">
          <img
            src={discovery.image}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://www.mugi.co.id/assets/images/img_def.png";
            }}
          />
          <div className="card-body pb-0">
            {/* <h5 className="card-title">{discovery.name}</h5> */}

            <div className="d-flex content__card mb-0 justify-content-between">
              <strong className="card-text">Tradable</strong>
              <p style={{ color: "#f9f9ff" }} className="card-text">
                {discovery.tradeable ? <i style={{ color: "green" }} class="far fa-check-circle"></i> : <i style={{ color: "red" }} class="far fa-times-circle"></i>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *  UserId: 1,
      name: '',
      image: 'https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1155848.jpg',
      tradeable: true,
      price: 300000,
      tradeWith: 'Playmat Yugioh San Diego Comic-Con Exclusive Yugi & Exodia Playmat',
      tag: 'Yugioh-TCG',
      description: 'Unli, NM',
 * 
 */

export default ItemCard;
