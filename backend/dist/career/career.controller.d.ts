import { CareerService } from './career.service';
export declare class CareerController {
    private careerService;
    constructor(careerService: CareerService);
    getPositions(query: any): Promise<any[]>;
}
