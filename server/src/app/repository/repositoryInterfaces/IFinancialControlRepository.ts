import { Request } from "express";
import FinancialControl from "../../models/FinancialControl";
import User from "../../models/User";

export interface IFinancialControlRepository {
  create(req: Request,user: User): Promise<FinancialControl | null>;
}
