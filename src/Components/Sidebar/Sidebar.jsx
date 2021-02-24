import s from './Sidebar.module.css';
import neo from './../../img/Neo.jpg';

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>
      <div className={s.aboutMe}>
        <div className={s.photo}>
          <img src={neo} alt="" />
        </div>
        <div className={s.decribtions}>
          Hello! I cook fresh, vegetarian recipes. My dog, Cookie, catches the crumbs. About C+K »
        </div>
        <div className={s.social}>
          <div className={s.social_top}>
            <div className={s.item}>
              <a href=".s">Contact</a>
            </div>
            <div className={s.item}>
              <a href=".s">New Here</a>
            </div>
            <div className={s.item}>
              <a href=".s">Shop</a>
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
      </div>
      <div className={s.myCookbook}></div>
      <div className={s.subscribe}></div>
      <div className={s.popularRecipes}></div>
    </div>
  );
};

export default Sidebar;
