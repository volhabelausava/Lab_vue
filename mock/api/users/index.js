import usersList from './users.json'

export default {
  'GET /api/users/:id': (req, res) => {
    const { id } = req.params;
    const user = usersList[id] || undefined

    return res.send({
      status: user ? 200 : 500,
      body: user
    })
  },
  'GET /api/users/list': (req, res) => res.json({
    list: usersList
  })
}
