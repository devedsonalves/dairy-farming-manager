import axios from "axios";
import { UrlBase } from "../constants/api";

export async function createProdutor(produtor) {
  await axios.post(`${UrlBase}/produtores`, produtor);
}
