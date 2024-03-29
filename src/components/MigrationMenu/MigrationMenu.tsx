import React, { useEffect, useState } from 'react';

import { useTranslation, Trans } from 'react-i18next';
import PopupModal from '@components/PopupModal';
import useStore from '@store/store';

const openBetterChatGPT = () => {
  window.open('https://bettergpt.chat', '_blank');
};

const MigrationMenu = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return isModalOpen ? (
    <PopupModal
      title={t('migration.title') as string}
      handleConfirm={() => {
        setIsModalOpen(false);
      }}
      setIsModalOpen={setIsModalOpen}
      cancelButton={false}
    >
      <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
        <div className='min-w-fit text-gray-900 dark:text-gray-300 text-md leading-7 mt-4'>
          <p className='my-4'>{t('migration.description')}</p>
          <p className='my-4'>
            <Trans
              i18nKey='migration.description2'
              components={[
                <a
                  href='https://bettergpt.chat/'
                  className='link'
                  target='_blank'
                />,
              ]}
            />
          </p>
          <p className='my-4'>
            <Trans
              i18nKey='migration.description3'
              components={[
                <a
                  href='https://discord.gg/g3Qnwy4V6A'
                  className='link'
                  target='_blank'
                />,
              ]}
            />
          </p>
        </div>
        <div className='flex justify-center'>
          <button
            type='button'
            className='btn btn-neutral mt-6'
            onClick={openBetterChatGPT}
          >
            {t('migration.button')}
          </button>
        </div>
      </div>
    </PopupModal>
  ) : (
    <></>
  );
};

export default MigrationMenu;
