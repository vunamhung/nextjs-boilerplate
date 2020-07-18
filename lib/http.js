import axios from "axios";
import { BASE_URL } from "@/lib/constants";

export default axios.create({ baseURL: BASE_URL });
