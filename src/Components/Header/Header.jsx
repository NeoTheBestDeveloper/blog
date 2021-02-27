import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.Header}>
      <ul className={s.Headers_items}>
        <li className={s.item}>
          <a href=".">About</a>
        </li>
        <li className={s.item}>
          <a href=".">Cookbook</a>
        </li>
        <li className={s.item}>
          <a href=".">Shop</a>
        </li>
        <li className={s.item}>
          <a href=".">Subscribe</a>
        </li>
        <li className={s.item}>
          <a href=".">Saved</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
