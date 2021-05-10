// const API_URL = "https://dogsapi.origamid.dev/json";
const API_URL = "http://jrdogsapi.test/json";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function PHOTO_CURTIR(id, token) {
  return {
    url: `${API_URL}/api/photo/curtir/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function LIKES_GET(id, token) {
  return {
    url: `${API_URL}/api/photo/likes/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function COMMENT_PHOTO(id, token, comment) {
  return {
    url: API_URL + `/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(comment),
    },
  };
}

export function COMMENT_DELETE(id, token) {
  return {
    url: API_URL + `/api/comment/delete/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function PHOTO_DELETE(id, token) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + "/api/password/reset",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET(token) {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
