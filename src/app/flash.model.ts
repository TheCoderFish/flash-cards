export class Flash {
    constructor(
        public question?: string,
        public answer?: string,
        public show?: boolean,
        public id?: number,
        public remembered?: remembered
    ) { }
}

type remembered = 'correct' | 'incorrect';
