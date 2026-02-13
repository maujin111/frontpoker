
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Player() {
  return (
    <div className="w-60 h-20 bg-blue-950 rounded-4xl flex gap-2">
      <div className="h-20 w-20 bg-green-700 rounded-4xl">
      </div>
      <div className="flex flex-col align-middle content-center h-full mt-2">
        <span className="text-white text-2xl">Hola</span>
        <span className="text-white text-xl">Mundo</span>
      </div>
    </div>
  )
}

