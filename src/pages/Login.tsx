import { FormInput } from "@/components/core/forms/FormInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email({
      message: "Debe ingresar un email válido.",
    })
    .nonempty("El campo de email es obligatorio."),
  password: z.string().nonempty("El campo de contraseña es obligatorio."),
});

type IForm = z.infer<typeof formSchema>;

export function Login() {
 // const navigate = useNavigate();

  const form = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: IForm) => {
   console.log(data)
  };

  return (
    <section className=" mx-auto flex items-center justify-center h-screen ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="mx-auto max-w-md min-w-96">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Ingrese con su correo o cuenta de google
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Email"
                    name="email"
                    placeholder="@gmail.com"
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Contraseña"
                    name="password"
                    placeholder="*********"
                    type="password"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login con Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                No tienes una cuenta?{" "}
                <a href="#" className="underline">
                  Crear cuenta
                </a>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </section>
  );
}
