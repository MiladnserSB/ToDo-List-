const BASE_URL = "https://api.example.com";

const request = async (endpoint, method, data = {}) => {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = response.json();
    return result;
  } catch (error) {
    console.error("Server Error", error);
  }
};
