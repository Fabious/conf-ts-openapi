import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ModelError } from '../models/ModelError';
import { Pet } from '../models/Pet';
import { ObservablePetsApi } from './ObservableAPI';

import { PetsApiRequestFactory, PetsApiResponseProcessor} from "../apis/PetsApi";
export class PromisePetsApi {
    private api: ObservablePetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PetsApiRequestFactory,
        responseProcessor?: PetsApiResponseProcessor
    ) {
        this.api = new ObservablePetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a pet
     */
    public createPets(_options?: Configuration): Promise<void> {
        const result = this.api.createPets(_options);
        return result.toPromise();
    }

    /**
     * List all pets
     * @param limit How many items to return at one time (max 100)
     */
    public listPets(limit?: number, _options?: Configuration): Promise<Array<Pet>> {
        const result = this.api.listPets(limit, _options);
        return result.toPromise();
    }

    /**
     * Info for a specific pet
     * @param petId The id of the pet to retrieve
     */
    public showPetById(petId: string, _options?: Configuration): Promise<Pet> {
        const result = this.api.showPetById(petId, _options);
        return result.toPromise();
    }


}



