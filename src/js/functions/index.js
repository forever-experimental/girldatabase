import { _ } from 'cute-con';
import { protect } from "cute-gcf";

const main = async (req, res) =>
{
    const {pk, json} = _(req.body);
    res.sendStatus(200);
};

export const functions = protect(main);
