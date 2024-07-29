import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center text-center flex-col gap-2 ${data.color}`}>
        <Layers/>
        <div>
          <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">{data.period}</p>
          <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">UGX.{data.sales}</p>
        </div>
    </div>
  )
}
