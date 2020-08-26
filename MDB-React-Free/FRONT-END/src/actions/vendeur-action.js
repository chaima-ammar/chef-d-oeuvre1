import * as types from "./type";
import { URL } from "./baseurl";
import Axios from "axios";

export function getProduct() {
  return (dispatch) => {
    Axios.get(URL + "Antica/vendeur/getProduct").then((res) => {
      console.log(res);

      dispatch(getListeprouduit(res.data));
    });
  };
}

export function getListeprouduit(paload) {
  return {
    type: types.getProduct,
    paload,
  };
}

export function deleteListeprouduit(paload) {
  return {
    type: types.deleteProduct,
    paload,
  };
}

export function deleteProduct(id) {
  console.log(id);
  return (dispatch) => {
    Axios.delete(URL + `Antica/vendeur/deleteProduct/${id}`)
      .then((res) => {
        dispatch(deleteListeprouduit);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
}

export const editListeproduit = (paload) => {
  return {
    type: types.edit_Product,
    paload,
  };
};

export const editProduct = (el) => {
  return (dispatch) => {
    if (el) {
      Axios.patch(URL + `Antica/vendeur/patchProduct/${el.id}`, el)
        .then((res) =>
          dispatch(editListeproduit(res.data), window.location.reload())
        )
        .catch((err) => console.log(err));
    }
  };
};

export const editReservation = (el) => {
  el.reservation = "resever";
  return (dispatch) => {
    if (el) {
      Axios.patch(URL + `Antica/vendeur/patchProduct/${el._id}`, el)
        .then((res) =>
          dispatch(editButtonReservation(res.data), window.location.reload())
        )
        .catch((err) => console.log(err));
    }
  };
};

export const editButtonReservation = (paload) => {
  return {
    type: types.editButtonRESERVATION,
    paload,
  };
};

export const addListeproduit = (payload) => {
  return {
    type: types.addProduct,
    payload,
  };
};
export const addProduct = (el) => {
  return (dispatch) =>
    Axios.post(URL + "Antica/vendeur/postProduct", el).then((res) =>
      dispatch(addListeproduit(res.data), window.location.reload(false))
    );
};
