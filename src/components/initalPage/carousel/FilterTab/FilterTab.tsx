import style from './filterTab.module.scss'
import { BsList } from 'react-icons/bs'
import { useState } from 'react'

function FilterTab() {

    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className={style.Filter}>
            {
                showFilter&&

                <div className={style.Filter__Filtering}>

                </div>
            }
            <span onClick={() =>setShowFilter(!showFilter)} className={style.Filter__moreIcon}><BsList size={40} /> </span>
        </div>
    )
}

export default FilterTab