import axios from 'axios';

const url = 'https://users-and-charts.onrender.com';

const getUser = async (id) => {
  const options = {
    method: 'GET',
    url: `${url}/api/v1/users/${id}`,
    params: {
      search_engine: 'v3',
    },
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios(options);
    const user = response.data;
    return user;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const getUsers = async () => {
  const options = {
    method: 'GET',
    url: `${url}/api/v1/users`,
    params: {
      search_engine: 'v3',
    },
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios(options);
    const users = response.data;
    return users;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const getUsersByName = async (name) => {
  const params = new URLSearchParams({ firstName: name });
  const options = {
    method: 'GET',
    url: `${url}/api/v1/users?${params}`,
    params: {
      search_engine: 'v3',
    },
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios(options);
    const users = response.data;
    return users;
  } catch (err) {
    return {
      error: err,
    };
  }
};

const getUsersXML = async () => {
  const options = {
    method: 'GET',
    url: `${url}/users.xml`,
    headers: {
      Authorization: '',
      'Content-Type': 'application/xml; charset=utf-8',
    },
  };
  try {
    const users = await axios(options).data;
    return users;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export {
  getUser, getUsers, getUsersXML, getUsersByName,
};
