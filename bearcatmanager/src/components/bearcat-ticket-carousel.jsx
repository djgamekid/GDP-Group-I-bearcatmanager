'use client'

import * as React from "react"
import { Link } from "react-router-dom"

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const ticketLabels = [
  { label: "Admit", href: "/ticket/admit" },
  { label: "Seat", href: "/ticket/seat" },
  { label: "Date", href: "/ticket/date" },
  { label: "Time", href: "/ticket/time" },
  { label: "Venue", href: "/ticket/venue" },
]

export function BearcatTicketCarousel() {
  return (
    (<div className="bg-[#004225] p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Bearcat Event Tickets</h2>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {ticketLabels.map((item, index) => (
            <CarouselItem key={index}>
              {/* <Link href={item.href} className="block p-1"> */}
                <Card
                  className="bg-white border-[#004225] border-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold text-[#004225]">{item.label}</span>
                  </CardContent>
                </Card>
              {/* </Link> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white hover:bg-[#005c34]" />
        <CarouselNext className="text-white hover:bg-[#005c34]" />
      </Carousel>
    </div>)
  );
}