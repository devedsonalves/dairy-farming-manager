import { UrlBase } from "../constants/api";
import axios from "axios";

export async function deleteVaca(id, index) {
  await axios.delete(UrlBase + "/vaca/" + id + "/" + index);
}
