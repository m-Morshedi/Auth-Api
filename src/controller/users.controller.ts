import express from "express";

import {
  getUsers,
  deleteUserById,
  updateUserById,
} from "../models/users.model";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await deleteUserById(req.params.id);
    return res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
