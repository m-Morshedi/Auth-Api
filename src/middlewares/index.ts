import express from "express";

import { get, merge } from "lodash";

import { getUserBySessionToken } from "../models/users.model";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["XSRF-TOKEN"];
    if (!sessionToken) {
      return res.sendStatus(403).json({ message: "Session token not found" });
    }

    const exitsUser = await getUserBySessionToken(sessionToken);
    if (!exitsUser) {
      return res.sendStatus(403).json({ message: "User not found" });
    }

    merge(req, { identity: exitsUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }
};
