import { Coordinates } from "./coordinates.model";

export interface Category {
    id:          string;
    name:        string;
    category:    string;
    address:     string;
    isActive:    boolean;
    coordinates: Coordinates;
    photo:       string;
    vehicle:     string;
}