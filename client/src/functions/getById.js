import { UrlBase } from "../constants/api";
import axios from "axios";

export async function getById(id) {
  const request = await axios.get(UrlBase + "/produtores/" + id);

  return request.data;
}
