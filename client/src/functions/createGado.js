import axios from "axios";
import { UrlBase } from "../constants/api";

export default function createGado(produtor, vaca) {
  axios.post(`${UrlBase}/vaca/${produtor.id}`, vaca);
}
