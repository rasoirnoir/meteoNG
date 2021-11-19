export interface DetailSuivant {
  day_short: string;
  condition: string;
  icon: string;
  tmin: number;
  tmax: number;
};

export const detailsSuivantBouchon = [
  {
    day_short: "Dim.",
    condition: "Eclaircies",
    icon: "https://prevision-meteo.ch/style/images/icon/eclaircies.png",
    tmin: 2,
    tmax: 17,
  },
  {
    day_short: "Lun.",
    condition: "Eclaircies",
    icon: "https://prevision-meteo.ch/style/images/icon/eclaircies.png",
    tmin: 1,
    tmax: 15,
  },
  {
    day_short: "Mar.",
    condition: "Eclaircies",
    icon: "https://prevision-meteo.ch/style/images/icon/eclaircies.png",
    tmin: 0,
    tmax: 14,
  }
]
