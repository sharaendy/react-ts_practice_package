import cn from 'classnames';

import { useState } from 'react';

import { SliderProps } from '../Slider/Slider.props';
import { ReactComponent as Arrow } from '../../img/arror.svg';

import styles from './Slider.module.scss';

export const Slider = ({ reviews }: SliderProps) => {
  const [slide, setSlide] = useState<number>(0);
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div className={styles.left}>
          <div className={styles.text}>{reviews[slide].text}</div>
          <div className={styles.author}>{reviews[slide].author}</div>
          <div className={styles.jobPosition}>{reviews[slide].jobPosition}</div>
        </div>
        <div
          className={styles.right}
          style={{ backgroundImage: `url{${reviews[slide].image}}` }}
        ></div>
      </div>
      <div className={cn(styles.arrow, styles.arrowLeft)}>
        <Arrow />
      </div>
      <div className={cn(styles.arrow, styles.arrowRight)}>
        <Arrow />
      </div>
    </div>
  );
};
