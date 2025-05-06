import React from 'react';
import { FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 bg-gray-900 rounded-xl p-8 shadow-lg border-l-4 border-pink-500">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaTools className="text-pink-500" />
        {t('skills.title')}
      </h3>
      <hr className="border-gray-700 mb-6" />

      <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
        <p>
          <strong className="text-white">{t('skills.languages')}</strong> Python • SQL
        </p>
        <p>
          <strong className="text-white">{t('skills.data')}</strong> Pandas • Numpy • Matplotlib • Seaborn • Scikit-learn • FastAPI • Streamlit
        </p>
        <p>
          <strong className="text-white">{t('skills.databases')}</strong> SQL Server • MySQL • BigQuery
        </p>
        <p>
          <strong className="text-white">{t('skills.bigdata')}</strong> Docker • Apache Hadoop • Apache Hive • Apache Spark
        </p>
        <p>
          <strong className="text-white">{t('skills.bi')}</strong> Power BI • Tableau
        </p>
        <p>
          <strong className="text-white">{t('skills.tools')}</strong> GitHub • Jupyter • Google Colab • Visual Studio Code • PyCharm
        </p>
        <p>
            <strong className="text-white">{t('skills.lang')}</strong> {t('skills.langList')}
        </p>
      </div>
    </div>
  );
};

export default Skills;
