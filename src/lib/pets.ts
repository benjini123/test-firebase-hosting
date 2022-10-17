const API_BASE_URL = "https://dwf-m7-app.herokuapp.com";

const storage = JSON.parse(localStorage.getItem("loginData"));
const token = storage ? storage.token : null;

export async function publishPet(pet) {
  const data = await fetch(API_BASE_URL + "/mascotas", {
    method: "post",
    body: JSON.stringify(pet),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  });
  const petData = await data.json();
  return petData;
}

export async function editPet(pet, petId) {
  const data = await fetch(API_BASE_URL + "/mascotas/editar/" + petId, {
    method: "put",
    body: JSON.stringify(pet),
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  });
  const petData = await data.json();
  return petData;
}

export async function findPets(userId) {
  const petList = await fetch(API_BASE_URL + "/mascotas/" + userId, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  });
  const petListData = await petList.json();
  return petListData;
}

export async function removePetApi(petId) {
  const petRes = await fetch(API_BASE_URL + "/mascotas/" + petId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  });

  const petListData = await petRes.json();
  return petListData;
}
