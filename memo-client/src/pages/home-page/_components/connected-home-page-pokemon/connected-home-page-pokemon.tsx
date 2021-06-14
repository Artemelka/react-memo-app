import React, { memo } from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../utils';
import { Text, WindowLoader, Overlay } from '../../../../components';
import {
  photoHasPokemonSelector,
  photoPokemonIsLoadingSelector,
  photoPokemonSelector,
  Pokemon,
  AllStore,
} from '../../../../redux';
import styles from './connected-home-page-pokemon.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-pokemon';

type MapStateToProps = {
  hasPokemon: boolean;
  isLoading: boolean;
  pokemon: Pokemon;
};

type HomePagePokemonProps = MapStateToProps & {};

export const HomePagePokemon = memo(({ hasPokemon, isLoading, pokemon }: HomePagePokemonProps) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="h3" align="center" fontWeight="bold">Pokemon</Text>
      {hasPokemon
        ? (
          <>
            <div className={cn(`${CLASS_NAME}__name`)}>
              <Text tagName="h6" fontWeight="bold">name: {pokemon.name || ''}</Text>
            </div>
            <div className={cn(`${CLASS_NAME}__title`)}>
              <Text tagName="p" fontWeight="medium">Parameters:</Text>
            </div>
            <ul className={cn(`${CLASS_NAME}__list`)}>
              <li className={cn(`${CLASS_NAME}__item`)}>
                <Text tagName="p">id: {pokemon.id || ''}</Text>
              </li>
              <li className={cn(`${CLASS_NAME}__item`)}>
                <Text tagName="p">height: {pokemon.height || ''}</Text>
              </li>
              <li className={cn(`${CLASS_NAME}__item`)}>
                <Text tagName="p">weight: {pokemon.weight || ''}</Text>
              </li>
              <li className={cn(`${CLASS_NAME}__item`)}>
                <Text tagName="p">order: {pokemon.order || ''}</Text>
              </li>
            </ul>
          </>
        )
        : (
          <div className={cn(`${CLASS_NAME}__title`)}>
            <Text tagName="p" fontWeight="medium">{'<= Select Pokemon'}</Text>
          </div>
        )
      }
      {isLoading && <Overlay inContainer><WindowLoader themeColor="accent"/></Overlay>}
    </div>
  );
});

const mapStateToProps = (state: AllStore): MapStateToProps => ({
  hasPokemon: photoHasPokemonSelector(state),
  isLoading: photoPokemonIsLoadingSelector(state),
  pokemon: photoPokemonSelector(state),
});

export const ConnectedHomePagePokemon = connect(mapStateToProps)(HomePagePokemon);