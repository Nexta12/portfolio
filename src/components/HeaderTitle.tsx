import React from 'react'

interface HeaderTitleKeys {
  mainTitle: string;
  subtitle?: string;
}

export const HeaderTitle = ({ mainTitle, subtitle }: HeaderTitleKeys) => {
  return (

    <div className="w-full text-center item-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight py-14">
        {mainTitle}
      </h2>
      {subtitle && (
        <p className="text-white text-lg">
          {subtitle}
        </p>
      )}

    </div>
  )
}
