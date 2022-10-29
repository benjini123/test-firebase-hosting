const API_BASE_URL = "https://dwf-m7-app.herokuapp.com";

export async function findUser(email) {
  const getUser = await fetch(API_BASE_URL + "/user/" + email, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const getUserJson = await getUser.json();

  return getUserJson;
}

export async function signIn(email, password) {
  const token = await fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const tokenJson = await token.json();
  return tokenJson;
}

export async function signUpApi(name, password, email) {
  console.log(name, password, email);

  const auth = await fetch(API_BASE_URL + "/auth", {
    method: "post",
    body: JSON.stringify({ name, password, email }),
    headers: { "Content-Type": "application/json" },
  });

  const userId = await auth.json();
  return userId;
}

export async function updateUser(name, password, email) {
  const updateRes = await fetch(API_BASE_URL + "/user/update", {
    method: "put",
    body: JSON.stringify({ name, password, email }),
    headers: { "Content-Type": "application/json" },
  });

  const updateResData = await updateRes.json();
  return updateResData;
}
