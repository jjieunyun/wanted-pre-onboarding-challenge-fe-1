import axios from "axios";

class authApi {
  constructor(key) {
    this.auth = axios.create({
      baseURL: "http://127.0.0.1:8080",
    });
  }

  async signUp(email, password) {
    const response = await this.auth.post("/users/create", { email, password });

    alert(response.data.message);
    return response.data.token;
  }

  async logIn(email, password) {
    const response = await this.auth
      .post("/users/login", { email, password })
      .catch((e) => {
        alert("로그인을 할 수없습니다.");
        return;
      });

    if (response) {
      alert(response.data.message);
      return response.data.token;
    }
  }
}

export default authApi;
