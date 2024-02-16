import { Coordinates } from "./coordinates.model";

export interface Salesman {
    id:          string;
    name:        string;
    category:    string;
    address:     string;
    isActive:    boolean;
    coordinates: Coordinates;
    photo:       string;
    vehicle:     string;
}

export interface NewSalesman {
    id:          string;
    name:        string;
    category:    string;
    address:     string;
    photo:       string;
    vehicle:     string;
}