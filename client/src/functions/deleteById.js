import { UrlBase } from "../constants/api";
import axios from "axios";

export async function deleteById(id) {
  await axios.delete(UrlBase + "/produtores/" + id);
}
