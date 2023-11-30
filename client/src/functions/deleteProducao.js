import axios from "axios";
import { UrlBase } from "../constants/api";

export async function deleteProducao(id, vaca, index) {
  await axios.delete(`${UrlBase}/vaca/${id}/${vaca}/${index}`);
}
