import s from './Sidebar.module.css';
import granola from './../../img/granola.jpg'
import shells from './../../img/shells.jpg'
import neo from './../../img/neo.jpg';

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>


      <div className={s.aboutMe}>
        <div className={s.photo}>
          <img src={neo} alt="" />
        </div>
        <div className={s.decribtions}>
          Hello! I cook fresh, vegetarian recipes. My dog Cookie, catches the crumbs. About C+K »
         </div>
        <div className={s.social}>
          <div className={s.social_top}>
            <div className={s.item}>
              <a href=".s">Contact </a>⋄
            </div>
            <div className={s.item}>
              <a href=".s">New Here? </a>⋄
            </div>
            <div className={s.item}>
              <a href=".s">Shop </a>⋄
            </div>
            <div className={s.item}>
              <a href=".s">Subscribe</a>
            </div>
          </div>
          <div className={s.social_bottom}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
        </div>
      </div> {/* AboutMe */}


      <div className={s.subscribe}>
        <div className={s.subscribe_title}>Don’t miss a new recipe</div>
        <form className={s.subscribe_form} action="">
          <input type="text" placeholder="Email adress..." />
          <button type="submit">Subscribe</button>
        </form>
      </div> {/* Subscribe */}


      <div className={s.popularRecipes}>
        <div className={s.popularRecipes_title}>Popular recipes</div>
        <div className={s.popularRecipes_items}>

          <div className={s.popularRecipes_item}>
            <div className={s.popularRecipes_item_photo}>
              <a href="s.">
                <img src={granola} alt="" />
              </a>
            </div>
            <div className={s.popularRecipes_item_title}>
              <a href=".s">Easy No-Bake Granola Bars</a>
            </div>
          </div> {/* popularRecipes_item */}

          <div className={s.popularRecipes_item}>
            <div className={s.popularRecipes_item_photo}>
              <a href="s.">
                <img src={shells} alt="" />
              </a>
            </div>
            <div className={s.popularRecipes_item_title}>
              <a href=".s">Best Stuffed Shells</a>
            </div>
          </div> {/* popularRecipes_item */}

        </div>


        <div className={s.popularRecipes_more}>
          <a href=".s">More favorites »</a>
        </div>
      </div> {/* PopularRecipes */}


    </div> /* Sidebar */
  );
};

export default Sidebar;
