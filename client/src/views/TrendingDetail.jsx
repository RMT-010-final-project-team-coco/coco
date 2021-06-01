import React from "react";

import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function TrendingDetail({ trending, ...props }) {
  const h = useHistory();

  console.log(trending.image, "<<<<DETAIL");

  const u = trending.User;

  const changePage = () => {
    h.push("/profile/" + trending.UserId);
  };
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      {/* <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="detail__container p-2">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div>
                <img style={{ width: "75%", margin: "auto" }} src={trending.image ? trending.image : "https://www.mugi.co.id/assets/images/img_def.png"} alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="items__detail">
                <div className="d-flex p-2">
                  <img src={u.userImage ? u.userImage : "https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png"} style={{ width: "10%" }} />
                  <div className="mx-1">
                    <p>@{u.username}</p>
                  </div>
                </div>
                <hr style={{ margin: "5px" }}></hr>
                <div>
                  <p>Card Name</p>
                  {trending.name}
                </div>
                <div>
                  <p>Description</p>
                  {trending.description}
                </div>
                <div>
                  <p>Tag</p>
                  {trending.tag}
                </div>

                {trending.tradeable ? (
                  <div>
                    <p>Trade With</p>
                    {trending.tradeWith}
                  </div>
                ) : (
                  ""
                )}

                <div>
                  <p>Price</p>
                  {trending.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            changePage();
          }}
        >
          See Profile
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TrendingDetail;
