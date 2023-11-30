import { UrlBase } from "../constants/api";
import axios from "axios";

export async function getAll() {
  const request = await axios.get(UrlBase + "/produtores");

  return request.data;
}
