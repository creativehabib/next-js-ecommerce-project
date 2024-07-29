import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStats = [
        {
            period: "Today Orders",
            sales: 110000,
            color: "bg-green-600"
        },
        {
            period: "Yesterday Orders",
            sales: 30000,
            color: "bg-orange-600"
        },
        {
            period: "This Month",
            sales: 110000,
            color: "bg-indigo-600"
        },
        {
            period: "Last Month",
            sales: 120000,
            color: "bg-cyan-600"
        },
        {
            period: "All-Time Sales",
            sales: 150000,
            color: "bg-purple-600"
        }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-2 py-8">
        {
            orderStats.map((item,i)=>{
                return(
                    <LargeCard className="bg-green-600" data={item} key={i}/>
                )
            })
        }
     
    </div>
  )
}
