import React, { createContext } from 'react';
import { useState } from 'react';
import { IMeetupItem } from '../shared/interfaces/meetup-item.interface';

export interface FavoritesContextType {
    favorites: IMeetupItem[],
    totalFavorites: number;
    addFavorite: (fav: IMeetupItem) => void;
    removeFavorite: (_id: string) => void;
    isFavorite: (_id: string) => boolean;
}

// pass any value of your choice in createContext()
export const FavoritesContext: React.Context<FavoritesContextType> = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: () => null,
    removeFavorite: () => null,
    isFavorite: () => false,
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {

    const [favorites, setFavorites] = useState<IMeetupItem[]>([]);

    function addFavorite(fav: IMeetupItem): void {
        setFavorites((currentValue) => currentValue.concat(fav));
    }

    function removeFavorite(_id: string): void {
        setFavorites((currentValue) => currentValue.filter(i => i._id !== _id));
    }

    function isFavorite(_id: string): boolean {
        return favorites.some(i => i._id === _id);
    }

    const context: FavoritesContextType = {
        favorites,
        totalFavorites: favorites.length,
        addFavorite,
        removeFavorite,
        isFavorite
    };

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
};