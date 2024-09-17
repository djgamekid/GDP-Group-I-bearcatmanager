'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TicketCarouselComponent() {
  const ticketTypes = ["New", "In Progress", "Review", "Testing", "Closed"]

  return (
    (<Carousel className="w-full max-w-xs">
      <CarouselContent>
        {ticketTypes.map((type, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-green-100 border-green-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold text-green-800">{type}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-green-800 hover:text-green-900" />
      <CarouselNext className="text-green-800 hover:text-green-900" />
    </Carousel>)
  );
}