import axios from 'axios';
import { BASE_URL } from '@/utilities/constants';

export default axios.create({ baseURL: BASE_URL });
