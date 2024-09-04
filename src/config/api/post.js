import axios from "axios";
import { baseurl } from "../constants";

export function post(url, formData, headers) {
  return axios.post(
    baseurl + url,
    {
      ...formData,
    },
    headers
  );
}
