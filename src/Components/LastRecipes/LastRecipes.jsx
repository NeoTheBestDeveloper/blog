import s from './LastRecipes.module.css';
import Recipe from './Recipe/Recipe';

const Last_Recipes = () => {
  return (
    <div className={s.Last_Recipes}>
      <Recipe />
    </div>
  );
};

export default Last_Recipes;
