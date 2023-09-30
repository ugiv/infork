import { Beranda } from "./beranda"
import { Statistik } from "./statistik"
import { Pengaturan } from "./pengaturan"



export function Board({beranda, statistik, pengaturan, handleMainBoard}){
    return (
        <div>
            <Beranda />
            <Statistik />
            <Pengaturan />
        </div>
    )
}