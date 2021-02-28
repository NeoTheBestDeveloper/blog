import s from './Recipe.module.css';

const Recipe = (props) => {
  return (
    <div className={s.Recipe}>
      <h1 className={s.title}>
        <a href=".s">{props.title}</a>
      </h1>
      <div className={s.date}>{props.date} - </div>
      <div className={s.coments}>
        <a href=".s">{props.commentsCount} Comments</a>
      </div>
      <div className={s.illustration}>
        <a href=".s">
          <img src={props.prewiews[0]} alt="" />
        </a>
      </div>
      <div className={s.text}>
        {props.par[0]}
      </div>
      <div className={s.illustration}>
        <a href=".s">
          <img src={props.prewiews[1]} alt="" /></a>
      </div>
      <div className={s.text}>
        {props.par[1]}
      </div>
      <div className={s.more}>
        <a href=".s">Continue to the recipe »</a>
      </div>
    </div>
  );
};

export default Recipe;
