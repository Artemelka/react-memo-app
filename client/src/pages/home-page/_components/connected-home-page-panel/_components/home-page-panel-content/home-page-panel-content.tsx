import React, { memo, useCallback, useMemo } from 'react';
import { fasterClassNames } from '../../../../../../utils';
import {
  Checkbox,
  CheckboxChangeEvent,
  Label,
  PROGRESS_STATUSES,
  ProgressLinear,
  Text,
} from '../../../../../../components';
import { PanelContentData, CheckboxName, PanelItem } from '../../../../../../redux';
import { getProgressValue } from '../../../../_utils/getProgressValue';
import styles from './home-page-panel-content.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-panel-content';
const CHECK_LIST_INITIAL_CONFIG = {
  listKeys: [],
  listValues: [],
};

type CheckListConfig = {
  listKeys: Array<string>;
  listValues: Array<boolean>;
}

type HomePagePanelContentProps = PanelContentData & {
  id: string;
  onCheckListChange: (panelItem: PanelItem) => void;
  title: string;
};

export const HomePagePanelContent = memo(({
  title,
  id,
  checkList,
  onCheckListChange,
}: HomePagePanelContentProps) => {
  const checkListConfig = useMemo(() =>
    Object.entries(checkList).reduce((acc: CheckListConfig, [name, value]) => ({
        ...acc,
        listKeys: [...acc.listKeys, name],
        listValues: [...acc.listValues, value],
      })
    , CHECK_LIST_INITIAL_CONFIG)
  , [checkList]);

  const progressValue = useMemo(
    () => getProgressValue(checkListConfig.listValues),
    [checkListConfig]
  );

  const handleCheckboxChange = useCallback(({ name, checked }: CheckboxChangeEvent) => {
    onCheckListChange({
      id,
      title,
      contentData: {
        checkList: { ...checkList, [name]: checked },
      }
    });
  }, [id, checkList, onCheckListChange, title]);

  return (
    <div className={cn(CLASS_NAME)}>
      <Text tagName="h3" upper align="center">{title}</Text>
      <div className={cn(`${CLASS_NAME}__progress`)}>
        <ProgressLinear percent={progressValue} withContour status={PROGRESS_STATUSES.PRIMARY} />
      </div>
      <ol className={cn(`${CLASS_NAME}__check-list`)}>
        {checkListConfig.listKeys.map(name => {
          const uniqId = `${name}_${id}`;

          return (
            <li key={uniqId} className={cn(`${CLASS_NAME}__checkbox`)}>
              <Checkbox
                id={uniqId}
                name={name}
                checked={checkList[name as CheckboxName]}
                size="small"
                onChange={handleCheckboxChange}
                themeColor="primary"
              />
              <Label htmlFor={uniqId} position="right">{name}</Label>
            </li>
          )
        })}
      </ol>
    </div>
  );
});