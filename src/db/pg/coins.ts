import {prisma} from '../prisma';

export const create = async (user: DbUserPost) => {
  const newUser = await prisma.users.create({
    data: {
      email: user.email,
      password: user.password,
      name: user.name ? user.name : '',
    },
  });

  return newUser;
};

export const deleteUser = async (id: number) => {
  const res = await prisma.users.delete({
    where: {
      id,
    },
  });
  return res;
};

export const allUsers = async () => {
  const allUsers = await prisma.users.findMany();
  return allUsers;
};

export const findCoin = async (email: string) => {
  const user = await prisma.coins.findUnique({
    where: {
      email,
    },
  });
  return user;
};