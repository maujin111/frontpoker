
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-red-500">
          <div className="flex text-center justify-center align-middle items-center gap-2">
            <span>POKER</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEW0lEQVR4nO2a34tVVRTHP01NEY6VaTU19RTmSPVq0UNJzIwGFRVIBj0kgpFJ0i+pCOqh31Np/QUR9RqBJWZEQTWS+SMC0aYgzAzt53RHK73jPbHge4bd8dx99j73nDtSfWEzZ85Za++1zl577e9e58L/OAEXAMuBDcBm4CvgV+Ao8CfwA7Ab2AI8A9wG9HOS4FxgDbANSEq048CHwN3AnJlwYABYDxz2GHml5M5UG9C9dvIN4Glgbjcc6AXWFTiQtnYo0msAj2isWnAZsDMibMo6kqjZWAurduJWvamki44kwAQwUpUTdwHNEgu5CkcSYAq4t1MnVpXMRlU6kqhZdiwdTlMnkSNTwM1lFnbsmsi2MeAQcEztkO510ucRYEGoE71OdvoY+LHDwato3wIf6HpbaGpeJ4XvgXOAs4FRUY2QQY2aPA8MAYPALLVB3bNn44F9HQYe14Y6RzbZ/YeLnBiQcgtYmnl2KfCWZ9AdMjQUw559qQW8AVyc0VmqZ40inrZeHW30yCwGdjmDWmq+DziFePQAazPp/XPgGo/OO5J7qZ3AXId6LCow4EnJ/RY5C+0wpL4ShZ4PVzlhZ6F/AtZI4EvgVE9H1ykVNityIoX11VTo3OiRs5n/QrbmbpQuFTfB63Nk+oD9krFwqhprnURjCSJvNj5z7NyaFejXm8guureB+Y7cY87CtviuGj1OAjAGnOIi4PUcG4/rQDeN5Z5sdFQLax5wQPeqDKm8bJZoLJuVR4FJj31m+zQ2BO6q6T5RN8Y11k8Bdr3sKm6O2GWf64IjoxH2vOcqfhOhWGdYpRiJsOcfEfJLhKK7+OvCggh7rFIzjVAelSgF142+CHvM9mkci1Cc3QVHzoqw5y9XcSJC0c4qdWMwwh7LbP+KxT7uKm6JUCwidVXgxQh73nUVXwlQ+KOLG+LXTthEbYg+imKM9FXgfIeiGI2oO6wOBFKUZWRIWR5pfB+4PIc07qyRNO6KII32/3nZTrY6Arb4b8kZaJZD441yV4371fd3gTR+zNfJXuCMGThYWbg21fe1gQere/IE5jmxWHTUfaLio+6wc9R9qkB2keQm9X0mF89KyA747XB15jTZVJiVWTM9igS3+LAPuMNTzNgoOWPI+AoQDS2iJTmnyNfaJIU0AQxHZie3GpNtY1oTLm7Qs8JykOFBCe9XUex04CHg98ANyvaAF2ToQhHAPl2P6E2m+0RRawFvApeoYpIW6B4Ine5PnEPL3ohdtq52BNiua/t7Wui0z48kknnN0vke1Z+MoR4EPu2wzwlVPKMwFEnvs+3CNv2W7a8J3ERJrPAs7m460gJW0iHuLDkzVTkypS9nlWBJiQ8/VTgy0Uk4+QoCO7royPYyCzsUvWKlkzU60tA+EZxiO0G/NjZfil4s+p3+hMOur/DI28sZzdZyu4XZ+hzxUckvwC1RkdUz9aOaduz5dpVUN4kRHNRPnKz29LPubVJRfFneoYj/Ov4Ga4/+Ds3Kll8AAAAASUVORK5CYII=" alt="chip--v2" />
            <span>PLACE</span>
          </div>

        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <Input id="password" placeholder="**********" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          INGRESAR
        </Button>
        <Button variant="link" className="text-red-500 underline">Registrarse</Button>
        <a
          href="#"
          className=" text-sm  text-red-500 underline"
        >
          Haz olvidado tu contraseña?
        </a>

      </CardFooter>
    </Card>
  )
}

