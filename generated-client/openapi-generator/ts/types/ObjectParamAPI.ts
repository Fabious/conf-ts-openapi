import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ModelError } from '../models/ModelError';
import { Pet } from '../models/Pet';

import { ObservablePetsApi } from "./ObservableAPI";
import { PetsApiRequestFactory, PetsApiResponseProcessor} from "../apis/PetsApi";

export interface PetsApiCreatePetsRequest {
}

export interface PetsApiListPetsRequest {
    /**
     * How many items to return at one time (max 100)
     * @type number
     * @memberof PetsApilistPets
     */
    limit?: number
}

export interface PetsApiShowPetByIdRequest {
    /**
     * The id of the pet to retrieve
     * @type string
     * @memberof PetsApishowPetById
     */
    petId: string
}

export class ObjectPetsApi {
    private api: ObservablePetsApi

    public constructor(configuration: Configuration, requestFactory?: PetsApiRequestFactory, responseProcessor?: PetsApiResponseProcessor) {
        this.api = new ObservablePetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a pet
     * @param param the request object
     */
    public createPets(param: PetsApiCreatePetsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.createPets( options).toPromise();
    }

    /**
     * List all pets
     * @param param the request object
     */
    public listPets(param: PetsApiListPetsRequest = {}, options?: Configuration): Promise<Array<Pet>> {
        return this.api.listPets(param.limit,  options).toPromise();
    }

    /**
     * Info for a specific pet
     * @param param the request object
     */
    public showPetById(param: PetsApiShowPetByIdRequest, options?: Configuration): Promise<Pet> {
        return this.api.showPetById(param.petId,  options).toPromise();
    }

}
