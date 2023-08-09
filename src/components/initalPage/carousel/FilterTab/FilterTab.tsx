import style from './filterTab.module.scss';
import { BsList } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function FilterTab() {
  const [showFilter, setShowFilter] = useState(false);
  const filterDiv = useRef<HTMLDivElement>(null);

  const getTotalWidth = () => (showFilter ? `${filterDiv.current?.scrollWidth ?? 0}px` : '0px');

  const animation = useSpring({
    width: getTotalWidth(),
    overflow: 'hidden',
    zIndex: 2,
    boxShadow: '10px 10px 10px 4px rgba(0, 0, 0, 0.15)',
  });

  const iconAnimation = useSpring({
    transform: `translateX(${showFilter ? '360px' : '160px'})`
  });

  return (
    <>
      <animated.div style={animation} className={style.Filter}>
        <div ref={filterDiv} className={style.Filter__Filtering}>
          dwadwadaw
        </div>
      </animated.div>
      <animated.span
        onClick={() => setShowFilter(!showFilter)}
        className={style.moreIcon}
        style={iconAnimation}
      >
        <BsList size={40} />
      </animated.span>
    </>
  );
}

export default FilterTab;