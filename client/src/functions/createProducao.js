import axios from "axios";
import { UrlBase } from "../constants/api";

export async function createProducao(produtor, index) {
  await axios.post(`${UrlBase}/vaca/${produtor.id}/${index}`);
}
