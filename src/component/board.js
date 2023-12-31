import { Beranda } from "./beranda";
import { Statistik } from "./statistic";
import { Pengaturan } from "./pengaturan";



export function Board({beranda, statistik, pengaturan}){
    if (beranda){
        return <Beranda />
    } else if (statistik) {
        return <Statistik />
    } else if (pengaturan) {
        return <Pengaturan />
    }
}