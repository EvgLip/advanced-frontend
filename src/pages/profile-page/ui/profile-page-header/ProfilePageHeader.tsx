import { useTranslation } from 'react-i18next';

import { Button, ButtonAppearance, Heading, HeadingLevel } from '@/shared/ui';

import classes from './ProfilePageHeader.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/store-provider';
import { profileActions, selectProfileReadonly, updateProfileData } from '@/entities/profile';

export default function ProfilePageHeader()
{
  const { t } = useTranslation('profile-page');
  const readonly = useAppSelector(selectProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = () => dispatch(profileActions.setReadonly(false));
  const onCancelEdit = () => dispatch(profileActions.cancelEdit());
  const onSave = () => dispatch(updateProfileData());

  return (
    <div className={classes.pageheader}>
      <Heading As={HeadingLevel.H3}>{t('Профиль')}</Heading>
      {
        readonly
          ? <Button
            appearance={ButtonAppearance.OUTLINE}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
          : <div className={classes.cancelsave}>
            <Button
              appearance={ButtonAppearance.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>

            <Button
              appearance={ButtonAppearance.OUTLINE}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
          </div>
      }
    </div>
  );
}