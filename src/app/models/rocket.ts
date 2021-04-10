export interface IRocket {
   
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
        cores: [
            {
                core_serial: string;
                flight: number;
                block: number;
                gridfins: boolean;
                legs: boolean;
                reused?: boolean;
                land_success?: boolean;
                landing_intent?: boolean;
                landing_type?:string;
                landing_vehicle?: string;
            }
        ]
    };
    second_stage: {
        block: number;
        payloads: [
            {
                payload_id: string;
                norad_id: number[];
                reused?: boolean;
                customers: string[];
                nationality: string;
                manufacturer: string;
                payload_type: string;
                payload_mass_kg: number;
                payload_mass_lbs: number;
                orbit: string;
               
            }
        ]
    };

}