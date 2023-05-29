

export interface ResponseCasino{
    success:                boolean
    data:                   Casino
    displayMessage:         string;
    errorMessage:           string[];
    code:                   number;
}
export interface Casino {
    idCasino:               number
    name:                   string
    logoPath:               string
    promotionalVideoPath:   string
    musicPath:              string
    color:                  string
    latitude:               number
    longitude:              number
    address:                string
    history:                string
    mission:                string
    vision:                 string
}