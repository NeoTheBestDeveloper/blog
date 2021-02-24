import s from './Recipe.module.css';
import il1 from './../../../img/roasted-beets.jpg';
import il2 from './../../../img/fresh-beets.jpg';

const Recipe = () => {
  return (
    <div className={s.Recipe}>
      <h1 className={s.title}>Perfect Roasted Beets</h1>
      <div className={s.date}>February 20, 2021 - </div>
      <div className={s.coments}>25 Comments</div>
      <div className={s.illustration}>
        <img src={il1} alt="" />
      </div>
      <div className={s.text}>
        <p>
          <b>These roasted beets are for everyone!</b> If you already love beetroots, I think you’ll
          be a big fan of this <em>foil-free, no-peeling-required</em> roasted beet recipe. If you
          don’t enjoy beets (yet), this roasting method just might change your mind.
        </p>
        <p>
          <b>
            These roasted beets feature lightly caramelized, tender-but-not-quite-crisp exteriors
            and deep, condensed flavor.
          </b>{' '}
          I don’t love beets in all applications, but these? I have to stop myself from devouring
          the whole pan before dinner.
        </p>
      </div>
      <div className={s.illustration}>
        <img src={il2} alt="" />
      </div>
      <div className={s.text}>
        <p>
          <b>With this method, simply scrub the beets well before baking.</b> No need to peel before
          or after baking. The skin, which is perfectly edible, just seems to disappear during the
          baking process.
        </p>
        <p>
          <b>The trick to pan-roasted beets is to drop the temperature a bit.</b> I always roast{' '}
          <a href="https://en.wikipedia.org/wiki/Roasted_sweet_potato">potatoes</a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Brussels_sprout">Brussels sprouts</a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Carrot">carrots</a>, and pretty much all the other
          veggies at 425 degrees Fahrenheit.
        </p>
        <p>
          For beets, since we don’t want crispy outsides (tender is nicer), we’ll roast at 375
          degrees. Easy!
        </p>
      </div>
      <div className={s.more}>
        <a href="">Continue to the recipe »</a>
      </div>
    </div>
  );
};

export default Recipe;
