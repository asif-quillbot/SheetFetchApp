import { Injectable } from "@nestjs/common";
//import Redis from 'ioredis';
import axios from "axios";

//const redis = new Redis();

@Injectable()
export class CareerService {
  async getPositions(query) {
    const finalData = await fetchAPI(query);
    const startIndex = (query.page - 1) * query.limit;
    const endIndex = query.page * query.limit;

    return finalData.slice(startIndex, endIndex);
  }

  // async getCached(query) {
  //   const cachedData = await redis.get('careers');

  //   if (cachedData) {
  //     const finalData = JSON.parse(cachedData);

  //     const startIndex = (query.page - 1) * query.limit;
  //     const endIndex = query.page * query.limit;

  //     return finalData.slice(startIndex, endIndex);
  //   } else {
  //     const finalData = await fetchAPI(query);

  //     await redis.set('careers', JSON.stringify(finalData));
  //     const startIndex = (query.page - 1) * query.limit;
  //     const endIndex = query.page * query.limit;

  //     return finalData.slice(startIndex, endIndex);
  //   }
  // }
}

const fetchAPI = async (query) => {
  const result = await axios.get(
    "https://spreadsheets.google.com/feeds/cells/1hGUy6wMH01fo_eHd1HqUU99RtpuxR3pChUpVcqxGDu8/1/public/values?alt=json"
  );
  const data = result.data.feed.entry;

  let i = -1;
  let item = {
    id: 0,
    position: "",
    description: "",
  };
  let j = 0;
  let finalData = [];

  data.forEach((element) => {
    i++;
    if (i % 2 == 0 && i > 1) {
      item.position = element.content.$t;
    } else if (i > 1) {
      item.description = element.content.$t;
      item.id = j;
      finalData[j++] = item;
      item = {
        id: 0,
        position: "",
        description: "",
      };
    }
  });

  return finalData;
};
