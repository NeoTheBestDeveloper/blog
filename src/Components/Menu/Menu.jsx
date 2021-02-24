import s from './Menu.module.css';
import logo from './../../img/logo.png';

const Menu = () => {
  return (
    <div className={s.Menu_wrapper}>
      <div className={s.Menu}>
        <div className={s.Menu_top}>
          <div className={s.Menu_logo}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={s.Menu_bottom}>
          <div className={s.Menu_adaptive}>Recipes & Search</div>
          <ul className={s.Menu_items}>
            <li className={s.item}>
              <a href=".">All recipes</a>
            </li>
            <li className={s.item}>
              <a href=".">Breakfast</a>
            </li>
            <li className={s.item}>
              <a href=".">Salad</a>
            </li>
            <li className={s.item}>
              <a href=".">Soup</a>
            </li>
            <li className={s.item}>
              <a href=".">Dinner</a>
            </li>
            <li className={s.item}>
              <a href=".">Dessert</a>
            </li>
            <li className={s.item}>
              <a href=".">Favorites</a>
            </li>
            <li className={s.item}>
              <div className={s.Menu_search}>
                <input type="search" placeholder="Search..." />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
