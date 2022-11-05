const API_BASE_URL = "https://dwf-m7-app.herokuapp.com";

export async function getPetsApi(latitude, longitude) {
  const pets = await fetch(
    API_BASE_URL + "/mascotas-cerca-de?lat=" + latitude + "&lng=" + longitude
  );
  const petsData = await pets.json();

  return petsData;
}

export async function setFormApi(data) {
  const createReport = await fetch(API_BASE_URL + "/report", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const createReportData = await createReport.json();
  return createReportData;
}
