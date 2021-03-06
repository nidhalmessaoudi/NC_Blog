import { ParsedQuery } from "query-string";

export default interface Request {
  // Window and navigtor infos
  protocol: string;
  href: string;
  origin: string;
  port: string | null;
  path: string | null;
  hash: string | null;
  queries: ParsedQuery<string> | null;
  locale: string;
  userAgent: string;
  platform: string;

  // Route infos
  params: {
    [prop: string]: string;
  };
}
