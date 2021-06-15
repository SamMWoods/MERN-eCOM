import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'Admin@example.com',
        password: bcrypt.hashSync('Aw3ef', 10),
        isAdmin: true
    },
    {
        name: 'Sam Woods',
        email: 'Admin1@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
    {
        name: 'Dan Ollie',
        email: 'Admin2@example.com',
        password: bcrypt.hashSync('12345', 10),
    },
]

export default users