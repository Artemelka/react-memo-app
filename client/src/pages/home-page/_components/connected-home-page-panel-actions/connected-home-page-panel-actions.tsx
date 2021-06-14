import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as getId } from 'uuid';
import { fasterClassNames } from '../../../../utils';
import { Button } from '../../../../components';
import { addPanelAction, DispatchFullActions, PanelItem } from '../../../../redux';
import styles from './connected-home-page-panel-actions.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-panel-actions';

type MapDispatchToProps = {
  addPanel: DispatchFullActions<PanelItem>;
}

type Props = MapDispatchToProps;

export class HomePagePanelActionsContainer extends Component<Props> {
  handleClick = () => {
    this.props.addPanel({
      id: getId(),
      title: 'new',
    });
  }

  render() {
    return (
      <div className={cn(CLASS_NAME)}>
        <div className={cn(`${CLASS_NAME}__button`)}>
          <Button
            value="add panel"
            onClick={this.handleClick}
            size="small"
            themeColor="primary"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps = {
  addPanel: addPanelAction
}

export const ConnectedHomePagePanelActions = connect(null, mapDispatchToProps)(HomePagePanelActionsContainer);