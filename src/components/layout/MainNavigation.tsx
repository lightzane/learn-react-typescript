import { NavLink } from 'react-router-dom';

export function MainNavigation() {
    return (
        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' >All Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-meetup' >New Meetup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites' >My Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}