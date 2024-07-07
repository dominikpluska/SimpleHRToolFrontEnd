const baseURL = "https://localhost:7268/api/";

export async function BaseAPICallMethod(ControllerURL, methodType, data) {
  if (methodType === "GET") {
    const response = await fetch(baseURL + ControllerURL, {
      method: methodType,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }

    if (response.status !== 200) {
      return "Error";
    }
  }
  if (methodType === "POST") {
    console.log(data);
    const response = await fetch(baseURL + ControllerURL, {
      method: methodType,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return "Error";
    }
  }
}
