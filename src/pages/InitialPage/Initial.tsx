import CarouselPokemon from "../../components/initalPage/carousel/CarouselPokemon"
import MainSection from "../../components/initalPage/MainSection/MainSection"
import style from './initial.module.scss'

function Initial() {
  return (
    <main className={style.mainContent}>
      <CarouselPokemon/>
      <MainSection/>
    </main>
  )
}

export default Initial