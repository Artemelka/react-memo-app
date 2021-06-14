import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fasterClassNames } from '../../../../utils';
import { CollapsePanel, ButtonMouseEvent } from '../../../../components';
import {
  rootPanelCollectionSelector,
  rootActivePanelIdSelector,
  setActivePanelIdAction,
  changePanelAction,
  removePanelAction,
  DispatchFullActions,
  AllStore,
  PanelItem,
} from '../../../../redux';
import { HomePagePanelContent } from './_components/home-page-panel-content';
import styles from './connected-home-page-panel.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-panel';

type MapStateToProps = {
  activePanelId: string;
  panels: Array<PanelItem>;
};

type MapDispatchToProps = {
  changePanel: DispatchFullActions<PanelItem>;
  removePanel: DispatchFullActions<string>;
  setPanelId: DispatchFullActions<string>;
};

type ConnectedHomePagePanelProps = MapStateToProps & MapDispatchToProps & {};

class HomePagePanel extends Component<ConnectedHomePagePanelProps> {
  handlePanelClick = (id?: string | number) => {
    const nextId = id === this.props.activePanelId ? '' : `${id}`;
    this.props.setPanelId(nextId);
  };

  handleCheckListChange = (panelItem: PanelItem) => {
    this.props.changePanel(panelItem)
  }

  handleDeletePanel = ({ id }: ButtonMouseEvent) => {
    this.props.removePanel(`${id}`);
  };

  render() {
    return (
      <ul className={cn(CLASS_NAME)}>
        {this.props.panels.map(({ id, title, contentData }) => (
          <li className={cn(`${CLASS_NAME}__item`)} key={id}>
            <CollapsePanel
              id={id}
              isOpen={this.props.activePanelId === id}
              onClick={this.handlePanelClick}
              panelTitle={title}
              size="small"
              themeColor="primary"
              variant="filled"
              contentActions={[{
                id,
                onClick: this.handleDeletePanel,
                value: 'delete panel',
                themeColor: 'error',
                variant: 'filled'
              }]}
              contentActionsAlign="right"
            >
              {contentData && (
                <HomePagePanelContent
                  title={title}
                  id={id}
                  checkList={contentData.checkList}
                  onCheckListChange={this.handleCheckListChange}
                />
              )}
            </CollapsePanel>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: AllStore):MapStateToProps => ({
  activePanelId: rootActivePanelIdSelector(state),
  panels: rootPanelCollectionSelector(state),
});

const mapDispatchToProps: MapDispatchToProps = {
  changePanel: changePanelAction,
  removePanel: removePanelAction,
  setPanelId: setActivePanelIdAction,
};

export const ConnectedHomePagePanel = connect(mapStateToProps, mapDispatchToProps)(HomePagePanel);