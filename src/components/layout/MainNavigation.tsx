import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FavoritesContext } from '../../store/favorites.context';
import classes from './MainNavigation.module.scss'; // scoped and modularized
import './MainNavigation.scss';

export function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContext);
    const totalFavorites = favoritesCtx.totalFavorites;
    const hiddenClass = totalFavorites <= 0 && 'd-none';

    const navLinks: JSX.Element[] = [
        <li>
            <NavLink to='/' >All Meetups</NavLink>
        </li>,
        <li>
            <NavLink to='/new-meetup' >New Meetup</NavLink>
        </li>,
        <li>
            <NavLink to='/favorites' className='position-relative' >
                My Favorites
                <span className={'badge text-bg-warning position-absolute top-0 start-100 translate-middle rounded-pill ' + hiddenClass}>
                    {totalFavorites}
                </span>
            </NavLink>
        </li>
    ];

    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul className='d-none d-lg-flex'>
                        {navLinks}
                    </ul>
                </nav>
            </header>

            <div className={"mobile text-center container mt-3 d-lg-none d-flex flex-column align-items-centers"}>
                <ul>
                    {navLinks}
                </ul>
            </div>
        </>
    );
}