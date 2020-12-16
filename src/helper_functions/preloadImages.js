// Preload GIFS
import symposiumGif from '../projects/images/Symposium-gif.gif';
import goodAFPizzaGif from '../projects/images/GoodAFPizza-gif.gif';
import schedulerGif from '../projects/images/Scheduler-gif.gif';

// Preload Images
import symposium from '../projects/images/Symposium-homepage.png';
import goodAFPizza from '../projects/images/GoodAFPizza-menu.png';
import scheduler from '../projects/images/Scheduler-homepage.png';
import jungle from '../projects/images/Jungle-homepage.png';



const preloadImages = () => {
  const images = [symposium, goodAFPizza, scheduler, jungle];
  images.forEach((image) => {
    new Image().src = image;
  });

  const gifs = [symposiumGif, goodAFPizzaGif, schedulerGif];
  gifs.forEach((gif) => {
    new Image().src = gif;
  });
}

export default preloadImages;
