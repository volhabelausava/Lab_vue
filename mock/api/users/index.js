import usersSource from './users.json'

let users = [...usersSource]

export default {
  'GET /api/users/:id': (req, res) => {
    const user = users.find(user => user.id === Number.parseInt(req.params.id)) || undefined;
    return res.send({
      status: user ? 200 : 500,
      body: user
    });
  },
  'GET /api/users/list': (req, res) => res.json({
    list: users
  }),
  'POST /api/users/create': (req, res) => {
    const id = users.length + 1;
    users.push({ ...req.body, id });

    return res.send({
      status: 200,
      body: id
    });
  },
  'PATCH /api/users/update': (req, res) => {
    const userData = req.body;
    users = users.map(user => user.id === userData.id
      ? { ...user, ...userData }
      : user
    );
    return res.send({
      status: 200
    });
  }
}
