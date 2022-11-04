import { Slider } from '../Slider/Slider';
import image from '../../img/picture_1.jpg';

export const App = () => {
  return (
    <div>
      <Slider
        reviews={[
          {
            id: 1,
            author: 'Андрей Шараевский',
            jobPosition: 'Главный молодец',
            text: 'Нормально дейлай, нормально будет. Я всегда так говорю.',
            image,
          },
        ]}
      />
    </div>
  );
};
