const API_BASE_URL = "http://localhost:5656";

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
