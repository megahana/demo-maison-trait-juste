import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Maison Trait Juste — Rénovation intérieure à Lyon',description:'Rénovation intérieure. Lyon & alentours. Concept de démonstration par Megahana.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
