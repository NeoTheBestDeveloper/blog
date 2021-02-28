import s from './PopularRecipe.module.css';


const PopularRecipe = (props) => {
    return <div className={s.popularRecipe}>
        <div className={s.popularRecipe_photo}>
            <a href="s.">
                <img src={props.photo} alt="" />
            </a>
        </div>
        <div className={s.popularRecipe_title}>
            <a href=".s">{props.title}</a>
        </div>
    </div>
}

export default PopularRecipe;