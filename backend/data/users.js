import bcrypt from 'bcryptjs'

const users = [{
        name: 'Admin User',
        phone: "0248958661",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jen Yaw',       
        phone: "0208958661",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Dorothy Yaw',       
        phone: "0548958661",
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users