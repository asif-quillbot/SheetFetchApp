"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CareerService = class CareerService {
    async getPositions(query) {
        const finalData = await fetchAPI(query);
        const startIndex = (query.page - 1) * query.limit;
        const endIndex = query.page * query.limit;
        return finalData.slice(startIndex, endIndex);
    }
};
CareerService = __decorate([
    common_1.Injectable()
], CareerService);
exports.CareerService = CareerService;
const fetchAPI = async (query) => {
    const result = await axios_1.default.get("https://spreadsheets.google.com/feeds/cells/1hGUy6wMH01fo_eHd1HqUU99RtpuxR3pChUpVcqxGDu8/1/public/values?alt=json");
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
        }
        else if (i > 1) {
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
//# sourceMappingURL=career.service.js.map