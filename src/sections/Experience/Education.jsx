import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineAutoStories } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 bg-gray-900 rounded-xl p-8 shadow-lg border-l-4 border-pink-500">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaGraduationCap className="text-pink-500" />
        {t('education.title')}
      </h3>
      <hr className="border-gray-700 mb-6" />

      {/* UTN */}
      <div className="mb-6">
        <h4 className="font-semibold">{t('education.utn.title')}</h4>
        <p className="text-gray-400">{t('education.utn.subtitle')}</p>
      </div>

      {/* Henry */}
      <div className="mb-6">
        <h4 className="font-semibold">{t('education.henry.title')}</h4>
        <p className="text-gray-400">{t('education.henry.subtitle')}</p>
        <p className="text-sm text-gray-500">{t('education.henry.date')}</p>
      </div>

      <h4 className="text-xl font-bold mt-10 mb-4 flex items-center gap-2">
        <MdOutlineAutoStories className="text-pink-500" />
        {t('education.additional.title')}
      </h4>
      <hr className="border-gray-700 mb-4" />

      {/* Yo Puedo Programar */}
      <div className="mb-4">
        <h5 className="font-semibold">{t('education.additional.ypp.title')}</h5>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>{t('education.additional.ypp.point1')}</li>
          <li>{t('education.additional.ypp.point2')}</li>
        </ul>
      </div>

      {/* Aprender a Emprender */}
      <div>
        <h5 className="font-semibold">{t('education.additional.ae.title')}</h5>
        <ul className="list-disc list-inside text-gray-400 text-sm">
          <li>{t('education.additional.ae.point1')}</li>
          <li>{t('education.additional.ae.point2')}</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
