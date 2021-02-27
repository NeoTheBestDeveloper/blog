import s from './LastRecipes.module.css';
import Recipe from './Recipe/Recipe';

const Last_Recipes = () => {
  return (
    <div className={s.Last_Recipes}>
      <Recipe />
      <div className={s.Last_Recipes_next}>
        <a href=".s">
          <div className={s.Last_Recipes_next_top}>Older ↣</div>
          <div className={s.Last_Recipes_next_bottom}>Next Page</div>
        </a>
      </div>
    </div>
  );
};

export default Last_Recipes;
