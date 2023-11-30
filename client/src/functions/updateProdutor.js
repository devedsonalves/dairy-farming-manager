import axios from "axios";
import { UrlBase } from "../constants/api";

export async function updateProdutor(produtor) {
  axios.patch(`${UrlBase}/produtores/${produtor.id}`, produtor);
}
