import type { InputValue } from "$lib/models/inputValue";

export class Simulation {

    public id?: number;

    constructor(
        public type?: InputValue,
        public energie?: InputValue,
        public kilometrage?: InputValue,
        public annee?: InputValue,
        public passagers?: InputValue
    ) { }
}