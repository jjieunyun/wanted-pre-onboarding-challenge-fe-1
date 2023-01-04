import axios from "axios";

class todoApi {
  constructor(key) {
    this.todo = axios.create({
      baseURL: "http://127.0.0.1:8080",
    });
  }

  async getTodos(token) {
    const response = await this.todo
      .get("/todos", {
        headers: {
          Authorization: token,
        },
      })
      .catch((e) => {
        alert(e.data.message);
      });

    if (response) {
      return response.data;
    }
  }

  async getTodoById(token, id) {
    const response = await this.todo
      .get(`/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .catch((e) => {
        alert(e.data.message);
      });

    if (response) {
      return response.data;
    }
  }

  async createTodo(token, title, content) {
    const response = await this.todo
      .post(
        "/todos",
        { title, content },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .catch((e) => {
        alert(e.data.message);
      });

    if (response) {
      return response.data;
    }
  }

  async updateTodo(token, id, title, content) {
    const response = await this.todo
      .put(
        `/todos/${id}`,
        { title, content },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .catch((e) => {
        alert(e.data.message);
      });

    if (response) {
      return response.data;
    }
  }

  async deleteTodo(token, id) {
    const response = await this.todo
      .delete(`/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .catch((e) => {
        alert(e.data.message);
      });

    if (response) {
      return response.data;
    }
  }
}

export default todoApi;
