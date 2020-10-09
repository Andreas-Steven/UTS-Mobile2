export interface Item {
    ID: string;
    Type: string;
    // ImageURL: string[];
    ImageURL: string;
    Brand: string;
    Model: string;
    Price: number;
    Stock: number;

    // Processor
    BaseClock: number;
    BoostClock: number;
    Core: number;
    Thread: number;

    // RAM
    Speed: number;
    Size: number;

    // Motherboard
    Chipset: string;
    SupportedProcessor: string;
}