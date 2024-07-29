"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
    const data = {
        labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
        datasets:[
            {
            label: "# of Votes",
            data: [60, 10, 20, 20],
            backgroundColor: [
                "rgba(0, 0, 255, 0.7",
                "rgba(255, 0, 221, 0.7",
                "rgba(2, 139, 71, 0.7)",
                "rgba(0, 0, 0, 0.7)"
            ],
            borderColor:[
                "rgba(0, 0, 255, 0.3)",
                "rgba(255, 0, 221, 0.3)",
                "rgba(2, 139, 71, 0.3)",
                "rgba(0, 0, 0, 0.3)"
            ],
            borderWidth: 1,
            }
        ]
    }
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <p className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Best Selling Products</p>
        {/* Charts */}
        <div className="p-4">
            <Pie data={data}/>
        </div>
    </div>
  )
}
